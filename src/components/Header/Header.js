import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='home'>Home</Link>
                <Link to='login'>login</Link>
                <Link to='signup'>signUp</Link>
                <Link to ='product' > Product </Link>
                <Link to='about'>About</Link>
                <Link to='others'>Others</Link>
            </nav>
            
        </div>
    );
};

export default Header;