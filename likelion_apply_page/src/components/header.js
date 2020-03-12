import React from 'react';
import './header.scss';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="navbar">
                    <div className="navbar__logo">
                        <h1> LIKE LION </h1>
                    </div>
                    <div className="navbar__menu">
                        <h2> menu </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;