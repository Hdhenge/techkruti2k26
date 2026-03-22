import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Event from "./pages/Event";
import Hackathons from "./pages/Hackathons";
import Loder from "./components/Loder";
import Sponsor from "./components/Sponsor";
import Scroll from "./components/Scroll";
import ProblemStatements from "./pages/Problems";
import ProblemForm from "./pages/ProblemForm";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import ProblemList from "./pages/ProblemList";
import Gallery from "./pages/Gallery";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hash scroll — runs after loader finishes and on route/hash change
  useEffect(() => {
    if (!loading && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [loading, location.hash]);

  return loading ? (
    <Loder />
  ) : (
    <>
      <Navbar id="nav" />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/hackthon" element={<Hackathons />} />
        <Route path="/Sponsor" element={<Sponsor />} />
        <Route path="/ProblemStatements2003" element={<ProblemStatements/>} />
        <Route path="/ProblemForm" element={<ProblemForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/repos" element={<ProblemList />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;