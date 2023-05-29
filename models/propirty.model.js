import mongoose from "mongoose";

const propirty = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    mobilenumber: {
      type: Number,
      trim: true,
      required: true,
    },
    mobilenumber2: {
      type: String,
      trim: true,
      required: false,
    },
    email: {
        type: String,
        trim: true,
        required: true,
      },
      servicetype: {
        type: String,
        trim: true,
        required: true,
      },

      unittype: {
        type: String,
        trim: true,
        required: true,
      },
      district: {
        type: String,
        trim: true,
        required: true,
      },
      garages: {
        type: Number,
        trim: true,
        required: true,
      },
      area: {
        type: Number,
        trim: true,
        required: true,
      },
      value: {
        type: Number,
        trim: true,
        required: true,
      },
      unumber: {
        type: Number,
        trim: true,
        required: true,
      },
      bathrooms: {
        type: Number,
        trim: true,
        required: true,
      },
      bedrooms: {
        type: Number,
        trim: true,
        required: true,
      },
      furniture: {
        type: String,
        trim: true,
        required: true,
      },
      details: {
        type: String,
        trim: true,
        required: false,
      },
      Image: {
        type: String,
        trim: true,
        required: true
      },
  },
  { timestamps: true }
);

const Propirty = mongoose.model("Propirty", propirty);

export default Propirty;