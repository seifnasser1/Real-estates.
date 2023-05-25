const user = new mongoose.Schema(
    {
        username:{
type :String,
required: true,
        },
    },
    { timestamps: true }
  );
  
  const User = mongoose.model("User", user);
  
  export default User;