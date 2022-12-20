import React from "react";
import "./Root.css";
import { Routes, Route, Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <div className="greet">
        <h1>건양대학교 사이버보안공학과 게시판</h1>
      </div>

      <div className="btn-area">
        <Link to="/login">
          <button type="submit">CONNECT..</button>
        </Link>
      </div>
    </div>
  );
}

export default Root;
