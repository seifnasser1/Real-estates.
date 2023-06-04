import mongoose from "mongoose";

const contactusmsg = new mongoose.Schema(
  {
    name:{type: String},
    phno:{type:String},
    loc:{type: String},
    email:{type: String},
    ask:{type: String},

  },
  { timestamps: true }
)

const Contactusmsg = mongoose.model("Contactusmsg", contactusmsg);

export default Contactusmsg;