const user = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: Number,
        trim: true,
        required: true,
      },
      password: {
        type: String,
        trim: true,
        required: true,
      },
      type: {
        type: Number,
        trim: true,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  const User = mongoose.model("User", user);
  
  export default User;