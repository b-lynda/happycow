const Signup = () => {
  return (
    <section className="signupSection">
     
        <label>Email</label>
        <input type="text" placeholder="Email" />
      
      
        <label>Username</label>
        <input type="text" placeholder="Username" />
     
      
        <label>Password</label>
        <input type="text" placeholder="Password" />
      
      <button type="submit">Next</button>
    </section>
  );
};

export default Signup;
