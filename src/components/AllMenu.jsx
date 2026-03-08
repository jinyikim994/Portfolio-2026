// AllMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from './layout/Header'; // 메뉴 데이터 가져오기

const AllMenu = ({ isOpen, onClose }) => {
    return (
    <div className={`all-menu ${isOpen ? 'is-active' : ''}`}>
        <ul className="menu-list">
            {MENU_ITEMS.map((item) => {
            const isExternal = /^https?:\/\//.test(item.link);

                return (
                    <li key={item.id} className={`menu-item${item.id}`}>
                        {isExternal ? (
                            <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            >
                            {item.label}
                            </a>
                        ) : (
                            <Link to={item.link} onClick={onClose}>
                            {item.label}
                            </Link>
                        )}
                    </li>
                );
            })}
        </ul>
    </div>
    );
};

export default AllMenu;