import Propirty from '../models/propirty.model.js';
import __dirname from '../app.js'
import wishlist from '../models/wishlist.model.js';
import fileUpload from "express-fileupload";
import { login } from './user.controller.js';



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

    console.log(req.body);
    const propirty = new Propirty({
      name: req.body.name,
      mobilenumber: req.body.mobile_number,
      mobilenumber2: req.body.other_number,
      email: req.body.name,
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
      adminid:req.session.user.id,
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
const Search = async (req, res, next) => {
  if (req.body.Price == 1) {

  }
  if (req.body.Bathrooms == 1) {
    const Bathroom = [1, 2];
  }
  else if (req.body.Bathrooms == 2) {
    const Bathroom = [3, 4, 5, 6, 7, 8];
  } else {
    const Bathroom = [1, 2, 3, 4, 5, 6, 7, 8];
  }
  var query = { servicetype: req.body.Status, unittype: req.body.Type, district: req.body.Area }
  console.log(query);
  Propirty.find(query).then(result => {
    console.log(result);
    res.render('pages/All', { Propirty: result,user: (req.session.user === undefined ? "" : req.session.user) });
  }).catch(err => (console.log(err)));
}
//navsearch
const navsearch = async(req,res,next)=>{
  const{searchtext}=req.query.searchtext;
  const query ={$or :[{"type":{$regex:searchtext}},{"name":{$regex:searchtext}},{"servicetype":{$regex:searchtext}},{"unittype":{$regex:searchtext}},{"district":{$regex:searchtext}},{"garages":{$regex:searchtext}},{"area":{$regex:searchtext}},{"value":{$regex:searchtext}},{"unumber":{$regex:searchtext}},{"bathrooms":{$regex:searchtext}},{"bedrooms":{$regex:searchtext}},{"furniture":{$regex:searchtext}},{"details":{$regex:searchtext}}]};
  Propirty.find(query).then(result =>{
    res.render('pages/All',{Propirty:result,user: (req.session.user === undefined ? "" : req.session.user)});
  }).catch(err => (console.log(err)));

}
const addwishlist= async (req, res, next) => {
  const exsistingwishlist=await wishlist.findOne({"username":req.session.user.id , "property": req.body.Propirty});
  var found;
  if(exsistingwishlist){
    wishlist.findByIdAndDelete(exsistingwishlist._id);
    res.redirect('/user/propirty/:id',{user: (req.session.user === undefined ? "" : req.session.user) });
  }
  else{
    const wish = new wishlist({
      username:req.session.user.id,
      property:req.body.Propirty,
    })
    console.log(wish);
    wish.save().then(result=>{
      res.redirect('/user/propirty/:id',{user: (req.session.user === undefined ? "" : req.session.user) });
    }).catch(err => (console.log(err)));
  }
}


export {
  addprop,
  Search,
  addwishlist,
  navsearch,
};
