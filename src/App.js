import "./App.css";
import Login from "./Login";
import Root from "./Root";
import Forgot from "./Forgot";
import Signup from "./signup";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findpassword" element={<Forgot />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
