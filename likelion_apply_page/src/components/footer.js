import React from 'react';
import './footer.scss';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="title">
                    <h4 className="slogan"> HACK YOUR LIFE </h4>
                    <h5> <point> LIKE LION </point> @ DGIST </h5>
                </div>
                <div className="contents">
                    <p><i class="fas fa-phone-square-alt fa-1x"></i> 010-3934-3115 </p>
                    <p><i class="fas fa-envelope fa-1x"></i> kt9393@dgist.ac.kr</p>
                    <p><i class="fab fa-github fa-1x"></i> https://github.com/lizard-kim </p>
                </div>
                <hr/>
                <div className="tag">
                    <p>ALL RIGHTS RESERVED 2019 © LIKE LION AT DGIST</p>
                </div>
            </div>
        )
    }
}

export default Footer;