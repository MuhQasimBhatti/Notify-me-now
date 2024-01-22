import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Getus from "./components/Getus";
import Navbar from "./components/Navbar";
import Email from "./components/Email";
import Sms from "./components/Sms";
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/getus" element={<Getus />} />
          <Route path="/email" element={<Email />} />
          <Route path="/sms" element={<Sms />} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
