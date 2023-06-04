import mongoose from "mongoose";
import Propirty from "./propirty.model.js"
const wishlistschema = new mongoose.Schema(
  {
username:{
    type : String,
    required :true,
    trim:true,
},
property:{ 
    type: Propirty.schema,
    required :true,
}
  },
  { timestamps: true }
)

const wishlist = mongoose.model("wishlist", wishlistschema);

export default wishlist;