import React from "react";
import "./login.css";
import isEmail from "./Is_email";

function Login() {
  return (
    <div>
      <section className="login-form">
        <h1>KY CYBERSEC BOARD</h1>
        <form action>
          <div className="int-area">
            <input type="text" name="id" id="id" autoComplete="off" required />

            <label htmlFor="id">USER NAME</label>
          </div>
          <div className="int-area">
            <input
              type="password"
              name="pws"
              id="pw"
              autoComplete="off"
              required
            />
            <label htmlFor="pw">PASSWORD</label>
          </div>
          <div className="btn-area">
            <button type="submit">LOGIN</button>
          </div>
        </form>
        <div className="caption1">
          <a href="">Join Us</a>
        </div>
        <div className="caption">
          <a href="/findpassword">Forget Password?</a>
        </div>
      </section>
    </div>
  );
}

export default Login;
