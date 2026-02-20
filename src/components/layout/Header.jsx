import React, { useState } from "react";
import AllMenu from "../AllMenu";

export const MENU_ITEMS = [
    { id: 1, label: 'HOME', link: '/' },
    { id: 2, label: 'ABOUT', link: '/about' },
    { id: 3, label: 'CAREER', link: '/career' },
    { id: 4, label: 'GSAP', link: '/gsap' },
];

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Header */}
            <header>
                <div className="logo"><a href="/index.html">FOLIO/26</a></div>

                <nav>
                    <ul className="navbar-list">
                        {MENU_ITEMS.map((item) => (
                        <li key={item.id} className={item.label === 'HOME' ? 'active' : ''}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                        ))}
                    </ul>
                </nav>

                <a 
                href="#" 
                className={`all-menu-btn ${isOpen ? 'is-active' : ''}`}
                onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                </a>
            </header>
            {/* // Header */}

            <AllMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Header;