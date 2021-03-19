import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <ul className="nav justify-content-center" bg="dark">
                <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Login">Destination</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Blog</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </>
    );
};

export default Header;