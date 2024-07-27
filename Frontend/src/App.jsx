import React from "react";
import Home from "./home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact.jsx";
import ContactUs from "./contact-us/ContactUs.jsx";
import AboutUs from "./about-us/AboutUs.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
