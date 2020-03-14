import React from 'react';
import './header.scss';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="navbar">
                    <div className="navbar__logo">
                        <h5> LIKE LION </h5>
                    </div>
                    <div className="navbar__menu">
                        <h6> menu </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;