import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class NavigatorBar extends React.Component {

    render() {
        let user = JSON.parse(localStorage.getItem('user'));
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand">
                    <span className="menu-collapsed"> Edutect</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>{user.username}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigatorBar;


