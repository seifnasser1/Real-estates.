//chatname
//isdroupchat//
//users
//latestmessage
//gropadmin//

//messagemodel elm4 commented



//const { ObjectId } = require("mongodb");
//const mongoose=require("mongoose");
import mongoose from "mongoose";
const messageModel=mongoose.Schema(
//  
//chat model
//{
// chatname:{type:String,trim:true},
// isgroup:{type: Boolean, default: false},
// users:[
//     {
//         type:mongoose.Schema.Types>ObjectId,
//         ref: "User",
//     },
// ],
// latestMes:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref:"Message"
// },
// groupadmin:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User",
// },
//     },
//const Chatt=mongoose.model("Chatt",chatModel)
//
//module.exports=Chatt;

    {
        sender:{type: mongoose.Schema.Types.ObjectId, ref: "user"},
        content:{type:String, trim:true},
        admin:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    },
    {
        timestamps: true,
    }

);
const Message= mongoose.model("Message", messageModel);
module.exports=Message;






//

// 
// const mongoose=require("mongoose");
// const userschema=mongoose.Schema(
//  
//user model
//{
// name:{type:String,required:true},
// email:{type:String,required:true},
//password:
//     {
//         type:String,required:true
//     },
// /pic:
//     {
//         type:String,required:true,default:"linkpicture"
//     },
//    {
  //  timestamps: true,
//}
//const User=mongoose.model("User",userschema)
//
//module.exports=User;
