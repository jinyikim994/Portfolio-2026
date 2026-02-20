import React from 'react';
import { MENU_ITEMS } from "./layout/Header";

const AllMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`all-menu ${isOpen ? 'is-active' : ''}`}>
            <ul className="menu-list">
                {MENU_ITEMS.map((item) => (
                    <li key={item.id} className={`menu-item${item.id}`}>
                        <a href={item.link} onClick={onClose}>
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllMenu;