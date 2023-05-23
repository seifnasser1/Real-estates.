const user = new mongoose.Schema(
    {
        
    },
    { timestamps: true }
  );
  
  const User = mongoose.model("User", user);
  
  export default User;