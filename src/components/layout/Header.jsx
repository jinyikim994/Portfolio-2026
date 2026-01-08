import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header-inner">
                <h1 className="logo">
                    <NavLink to="/" onClick={closeMenu}>LOGO</NavLink>
                </h1>

                {/* MO MENU BTN */}
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="메뉴 열기/닫기"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* PC MENU */}
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><NavLink to="/Page1" onClick={closeMenu}>Page1</NavLink></li>
                        <li><NavLink to="/Page2" onClick={closeMenu}>Page2</NavLink></li>
                        <li><NavLink to="/Page3" onClick={closeMenu}>Page3</NavLink></li>
                        <li><NavLink to="/Page5" onClick={closeMenu}>Page4</NavLink></li>
                        <li><NavLink to="/Page4" onClick={closeMenu}>Page5</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
