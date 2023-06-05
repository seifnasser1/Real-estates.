import { Result } from 'express-validator';
import Message from '../models/message.model.js';
import Propirty from '../models/propirty.model.js';


const sendMes = async (req, res, next) => {
    const query={"_id":req.params.id}
Propirty.findOne(query).then(result=>{
  const content =req.body.content;
    
  if(!content){
      console.log("Invalid data passed into request");
      return res.sendStatues(400);
  }
console.log(req.body);
const message = new Message({
  sender: req.session.user._id,
 content: req.body.content,
 receiver: result.adminid,
//
});
message.save()


  .catch(err => {
    console.log(err);
  });
}) .catch(err1 => {
  console.log(err1);
});
   };
   //2adima
 const messages= async (req,res,next)=>{
  const query={"_id":req.params.id}
  Propirty.findOne(query).then(res=>{
  const query1={"sender":req.session._id,"receiver":res.adminid};
  const query2={"sender":res.adminid,"receiver":req.session._id};
  const sendedmes= Message.find(query1);
  const receivmes= Message.find(query2);
});
 }
   export { 
    sendMes,
    messages,
  };
//module.exports={sendMes};
