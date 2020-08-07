import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Map Editor Tool</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to='/map-editor' className="nav-link">Map Editor</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/' className="nav-link">Saved Maps</Link>
                    </li>
                    <li className="navbar-item" 
                        style={{
                            border: "3px double white",
                            position: "absolute",
                            right: "5px",
                            top: "5px"
                            }}>
                        <Link to='/test' className="nav-link">PLAY</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;