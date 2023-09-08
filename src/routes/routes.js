import React from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import Works from "../components/Works";
import Contacts from "../components/Contacts";

function routes() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default routes;
