import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
// Page
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

function App() {
    return (
    <>
            <Header />
                <Routes>
                    <Route index element={<Main />} /> 
                    <Route path="/Page1" element={<Page1 />} />
                    <Route path="/Page2" element={<Page2 />} />
                    <Route path="/Page3" element={<Page3 />} />
                    <Route path="/Page4" element={<Page4 />} />
                    <Route path="/Page5" element={<Page5 />} />
                </Routes>
            <Footer />
        </>
    );
}

export default App;
