import React from "react";
import { Routes, Route } from "react-router-dom";

// Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

// Page
import About from "./pages/About";
import Career from "./pages/Career";
import Gsap from "./pages/Gsap";

function App() {
    return (
        <>
            <Header />
                <Routes>
                    <Route index element={<Main />} /> 
                    <Route path="/About" element={<About />} />
                    <Route path="/Career" element={<Career />} />
                    <Route path="/Gsap" element={<Gsap />} />
                </Routes>
        </>
    );
}

export default App;
