import React from 'react';

import { Link } from 'react-router-dom';
import '.././../App.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <Link to='/'><img src="../img/logoHome.png" className="logo" width="100" alt="RedFilms"/></Link>
                <Link to='/'><h1 className="textLogo">RedFilms</h1></Link>
            </div>
        </header>
    );
}

export default Header;