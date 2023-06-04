import { Result } from 'express-validator';
import Message from '../models/message.model.js';


//const asyncHandler=require("express-async-handler");
//const Message=require('../models/chat')


// const sendMes =asyncHandler(async(req, res)=>{
//     const content =req.body.content;
//     const  chatId =req.body.chatId;

//     if(!content||! chatId){
//         console.log("Invalid data passed into request");
// return res.sendStatues(400);
//     } 
//     var newmes ={
//         sender:req.User._id,
//         content:content,
//         chatt: chatId
//     };
//     try{
// var mes=await Message.create(newmes);

// mes=await mes.populate("sender");
//  mes=await mes.populate("chatt" );
// //  mes=await User.populate(mes,{
// //     path:"chat.users",
// //     select:"name pic email",
// // });

// await Chatt.findByIdAndUpdate(req.body.chatId,{
//     latestMes:mes,
// });
// res.json(mes);

// }
// catch(error){
// res.statues(400);
// throw new Error(error,mes);
// }
// });

// const allmes =asyncHandler(async(req,res)=>{
// try{
//     const mess=await Message.find({chat:req.params.chatId})
//     .populate("sender", "name pic email")
//     .populate("chatt");

//     res.json(mess);
// }
// catch(error){
//     res.statues(400);
//     throw new Error(error,mes);  
// }
// })


const sendMes = async (req, res, next) => {
    
    const content =req.body.content;
    
        if(!content){
            console.log("Invalid data passed into request");
            return res.sendStatues(400);
        } 
   
    
    console.log(req.body);
      const message = new Message({
       user: req.body,
       content: req.body.content,
       receiver: req.body.receiver,
      
      });
      message.save()

    
        .catch(err => {
          console.log(err);
        });
   };
 
   export { sendMes};
//module.exports={sendMes};
