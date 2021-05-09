import React from 'react';
import logo from '../../src/images/logo192.png';

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="typing" />
            <span className="logoheading">Welcome to the Typing Hero </span>
        </header>
    )
}

export default Header;
