import React from 'react';
import logo from "../assets/logo3.png";

const Header = () => {
    return (
        <header className="app_header">
            <img
                className="app_header_logo"
                src={logo}
                alt={logo}
            />
            <h1 className="app_header_title">Airplane Tickets</h1>
        </header>
    );
};

export default Header;
