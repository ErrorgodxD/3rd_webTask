import React from "react";
import "./forgot.css";

function Forgot() {
  return (
    <div>
      <section className="email-form">
        <h1>비밀번호 찾기</h1>
        <form action>
          <div className="int-area">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
            <label htmlFor="id">Email</label>
          </div>

          <div className="int-area">
            <input
              type="text"
              name="code"
              id="code"
              autoComplete="code"
              required
            />
            <label htmlFor="id">인증번호</label>
          </div>

          <div className="btn-area">
            <button type="submit">이메일 보내기</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Forgot;
