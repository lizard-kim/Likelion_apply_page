import React from 'react';
import { Link } from 'react-router-dom'
import hackyourlife_font from '../static/hackyourlife_font.png'
import background from '../static/hackyourlife.png'
import './main.scss';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            alignSelf: "left",
            width: "70%",
            margin: 0
        }}
    />
);

class MainPage extends React.Component{
    render(){
        return(
            <div className="wrapper">
                {/*<img className="background" src={background}/>*/}
                <div className="main">
                    <div className="mainbox">
                        <div className="mainbox__slogan">
                            <img src={hackyourlife_font}/>
                        </div>
                        <div className="mainbox__name">
                            <h4> 멋쟁이 사자처럼 8기 </h4>
                        </div>
                        <hr style={{width: "50%"}}/>
                        <div className="mainbox__duedate">
                            <p> 모집기간 : 2020.03.14 ~ 2020.03.21 </p>
                        </div>
                        
                        <div className="mainbox__applybox">
                            <Link to="/users">
                                <div className="button">
                                    <h5> Apply! </h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="info__title">
                        <h3 className="title"> 멋쟁이 사자처럼에서 <br/> 당신은 성장할 수 있습니다 </h3>
                        <ColoredLine color="#F2A141" />
                        <h4 className="text"> You can ... </h4>
                    </div>
                    <div className="info__content">
                        <div className="info__content__first">
                            <i class="fas fa-code fa-6x"></i>
                            <h5 className="text"> learn develop skills </h5>
                        </div>
                        <div className="info__content__second">
                            <i class="far fa-lightbulb fa-6x"></i>
                            <h5 className="text"> realize your own service </h5>
                        </div>
                        <div className="info__content__third">
                            <i class="far fa-comments fa-6x"></i>
                            <h5 className="text"> co-work other dreamers </h5>
                        </div>
                    </div>
                    <div className="info__end">
                        <h4 className="text"> in <point>LIKE LION </point>@ DGIST </h4>
                    </div>
                </div>
                <div className="curi">
                    <div className="curi__card">
                        <div className="elem-top">
                            <div className="elem">
                                <h1>hihi</h1>
                            </div>
                            <div className="elem">
                                <h1>hihi</h1>
                            </div>
                            <div className="elem">
                                <h1>hihi</h1>
                            </div>
                        </div>
                        <div className="elem-bottom">
                            <div className="elem">
                                <h1>hihi</h1>
                            </div>
                            <div className="elem">
                                <h1>hihi</h1>
                            </div>
                        </div>
                    </div>
                    <div className="curi__title">
                        <h5> title </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;