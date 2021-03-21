import React from 'react';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user);
    return (
        <>
            <ul className="nav justify-content-center" bg="dark">
                <a class="navbar-brand" href="/">Metro Race</a>
                <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/destination/:id">Destination</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Blog</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
                </li>
                <li className="nav-item">
                {
                    user.name ? <p>{user.name}</p> : <Link className="nav-link" to="/login">Login</Link> 
                }
               
                </li>
            </ul>
        </>
    );
};

export default Header;