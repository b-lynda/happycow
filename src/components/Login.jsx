
const Login = () => {
  return (
    <section className="loginComponent">
      <div className="startLineInput">
        <label htmlFor="">Username or Email</label>
        <input type="text" placeholder="Username or Email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" />
      </div>

      <div className="lastLineInput">
        <input type="checkbox" name="" id="" />
        <a href="#">Forgot Password</a>
      </div>

      <button type="submit">Login</button>
    </section>
  );
};

export default Login;
