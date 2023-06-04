import mongoose from "mongoose";

const message = new mongoose.Schema(
  {
    sender:{type: mongoose.Schema.Types.ObjectId, ref: "user"},
    content:{type:String, trim:true},
    receiver:{type: mongoose.Schema.Types.ObjectId, ref: "user"}
  },
  { timestamps: true }
)

const Message = mongoose.model("Message", message);

export default Message;