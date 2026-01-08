import React from "react";

const Header = () => {

    return (
        <>
            {/* All Menu */}
            <div className="all-menu">
                <ul className="menu-list">
                    <li className="menu-item1">
                        <a href="/index.html">HOME</a>
                    </li>
                    <li className="menu-item2">
                        <a href="/html/about/index.html">ABOUT</a>
                    </li>
                    <li className="menu-item3">
                        <a href="/html/career/index.html">CAREER</a>
                    </li>
                    <li className="menu-item4">
                        <a href="/html/gsap/index.html">GSAP</a>
                    </li>
                </ul>
            </div>
            {/* // All Menu */}

            {/* Header */}
            <header>
                <div className="logo">
                    <a href="/index.html">FOLIO/26</a>
                </div>

                <nav>
                    <ul className="navbar-list">
                        <li className="active">
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="">ABOUT</a>
                        </li>
                        <li>
                            <a href="/html/career/index.html">CAREER</a>
                        </li>
                        <li>
                            <a href="/html/gsap/index.html">GSAP</a>
                        </li>
                    </ul>
                </nav>

                <a href="#" className="all-menu-btn">
                    <span></span>
                    <span></span>
                </a>
            </header>
            {/* // Header */}
        </>
    );
};

export default Header;
