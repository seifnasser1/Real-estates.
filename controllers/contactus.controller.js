import Contactusmsg from '../models/contactus.model.js';
import __dirname from '../app.js'  //

//import fileUpload from "express-fileupload"; //


const contact = async (req, res) => {


  // if (flagg > 0) {
  //    return ;
  //  }


     const contactusmsg = new Contactusmsg({
      cname: req.body.cname,
      cphone: req.body.cphone,
      cloc: req.body.cloc,
      cmail: req.body.cmail,
     cmes:req.body.cmes,

     
     });
     contactusmsg.save()
       .then(result => {
         res.render('pages/contctus');
       })
       .catch(err => {
         console.log(err);
       });

   
  };

  export { addcontactusmsg};