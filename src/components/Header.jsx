import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar bg-base-100 justify-around">
            <div className="lg:flex-1">
                <Link to={"/"} className="normal-case text-3xl lg:text-4xl font-extrabold">Banglar t-Shirt</Link>
            </div>
            <nav className="lg:flex-none">
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 font-semibold">
                    <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-sky-400/100" : ""} > Home </NavLink></li>
                    <li><NavLink to={"/review"} className={({ isActive }) => isActive ? "text-sky-400/100" : ""} > Order Review </NavLink></li>
                    <li><NavLink to={"/about"} className={({ isActive }) => isActive ? "text-sky-400/100" : ""} > About </NavLink></li>
                    <li><NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-sky-400/100" : ""} > Contact </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;