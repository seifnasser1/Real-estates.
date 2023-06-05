import Propirty from '../models/propirty.model.js';
import __dirname from '../app.js'
import wishlist from '../models/wishlist.model.js';
import User from '../models/user.model.js';
import fileUpload from "express-fileupload";
import { login } from './user.controller.js';

const profilewishlist= (req, res,next) => {
  var query = { "_id": req.params.id };
  const arr=[];
  User.find(query)
    .then(result1 => {
  wishlist.find({"userid":req.params.id}).then(async result=>{
  console.log(result);
  if(result.length>0){
  for(var i=0;i<result.length;i++){
    const prop=await Propirty.findOne({"_id":result[i].propertyid})
      arr[i]=prop;
    }
  }
   res.render('pages/profile', { User: result1[0], wish : arr , user: (req.session.user === undefined ? "" : req.session.user)});
}).catch(err1 => {
  console.log(err1);
});
})
    .catch(err => {
      console.log(err);
    });
};

const getTopSalesProperties = async (req, res) => {
  const Property = require('/models/propirty.model');
  try {
    // Fetch properties from the database
    const properties = await Property.find().sort({ value: -1 }).limit(5);

    res.render('admin-dashboard', { properties }); // Pass the properties to the template
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

const viewproperty= async (req, res,next) => {
  var query = { "_id": req.params.id };
  var value;
  const exsistingwishlist = await wishlist.findOne({"userid":req.session.user._id,"propertyid":req.params.id});
  if(exsistingwishlist==null){
    value=1;
  }else{
    value=2;
  }
  Propirty.find(query)
    .then(result => { 
      console.log(value);
      res.render('pages/villa', { Propirty: result[0],v:value ,user: (req.session.user === undefined ? "" : req.session.user)});
    })
    .catch(err => {
      console.log(err);
    });
};
const addprop = async (req, res, next) => {
  let imgFile;
  let uploadPath;
  console.log(req.files)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  imgFile = req.files.img;

  uploadPath = './public/img/' + req.body.name + '.jpg';
  // Use the mv() method to place the file somewhere on your server
  imgFile.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    console.log(req.session.user.id);
    const propirty = new Propirty({
      name: req.body.name,
      mobilenumber: req.body.mobile_number,
      mobilenumber2: req.body.other_number,
      email: req.session.user.email,
      servicetype: req.body.servise,
      unittype: req.body.type,
      district: req.body.district,
      garages: req.body.garage,
      area: req.body.area,
      value: req.body.vale,
      unumber: req.body.u_nom,
      bathrooms: req.body.u_path,
      bedrooms: req.body.u_bed,
      furniture: req.body.f_type,
      details: req.body.details,
      Image: req.body.name + '.jpg',
      adminid:req.session.user._id,
        });
    propirty.save()
      .then(result => {
        console.log('unit added succesfully');
        res.redirect('/admin');
      })
      .catch(err => {
        console.log(err);
      });
  });

};

//navsearch
const navsearch = async(req,res,next)=>{
  const{searchtext}=req.query.searchtext;
  const query ={$or :[{"type":{$regex:searchtext}},{"name":{$regex:searchtext}},{"servicetype":{$regex:searchtext}},{"unittype":{$regex:searchtext}},{"district":{$regex:searchtext}},{"garages":{$regex:searchtext}},{"area":{$regex:searchtext}},{"value":{$regex:searchtext}},{"unumber":{$regex:searchtext}},{"bathrooms":{$regex:searchtext}},{"bedrooms":{$regex:searchtext}},{"furniture":{$regex:searchtext}},{"details":{$regex:searchtext}}]};
  Propirty.find(query).then(result =>{
    res.render('pages/All',{Propirty:result,user: (req.session.user === undefined ? "" : req.session.user)});
  }).catch(err => (console.log(err)));

}
const addwishlist= async (req, res, next) => {
  const exsistingwishlist=await wishlist.findOne({"userid":req.session.user._id,"propertyid":req.params.id});
  if(exsistingwishlist){
    console.log(exsistingwishlist.id);
    wishlist.findByIdAndDelete(exsistingwishlist.id).then(result=>{
          res.redirect('/');
    }).catch(err => {
      console.log(err);
    });
  }
  else{
    const wish = new wishlist({
      userid:req.session.user._id,
      propertyid:req.params.id,
    })
    wish.save().then(result=>{
      res.redirect('/');
    }).catch(err => (console.log(err)));
  }
}
const viewprop= async (req,res,next)=>{
  Propirty.find().then(result=>{
    res.render('pages/adminUnits',{properties:result,user: (req.session.user === undefined ? "" : req.session.user)})
  })
}

export {
  addprop,
  addwishlist,
  navsearch,
  viewproperty,
  profilewishlist,
  viewprop,
};
