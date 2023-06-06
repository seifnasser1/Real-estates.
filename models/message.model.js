import mongoose from "mongoose";

const message = new mongoose.Schema(
  {
    sender:{type: String, required:true},
    content:{type:String, trim:true},
    receiver:{type:String, required:true}
  },

  { timestamps: true }
)

const Message = mongoose.model("Message", message);

export default Message;


