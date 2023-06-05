import mongoose from "mongoose";
import Propirty from "./propirty.model.js"
const wishlistschema = new mongoose.Schema(
  {
userid:{
    type : String,
    required :true,
    trim:true,
},
propertyid:{ 
    type:String,
    required :true,
    trim:true,
}
  },
  { timestamps: true }
)

const wishlist = mongoose.model("wishlist", wishlistschema);

export default wishlist;