import React from 'react';
import { Link } from 'react-router-dom'
import hackyourlife_font from '../static/hackyourlife_font.png'
import html from '../static/html.png'
import css from '../static/css.png'
import js from '../static/js.png'
import python from '../static/python.png'
import react from '../static/react.png'
import django from '../static/django.png'
import git from '../static/git.png'
import Footer from './footer'
import './main.scss';

const ColoredLine = ({ color, wid, ali="left"}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            alignSelf: ali,
            width: wid,
            margin: 0,
            border: 0
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
                            <img src={hackyourlife_font} alt="mainimage"/>
                        </div>
                        <div className="mainbox__name">
                            <h4> 멋쟁이 사자처럼 8기 </h4>
                        </div>
                        <hr style={{width: "50%"}}/>
                        <div className="mainbox__duedate">
                            <p> 사이트 준비 중 입니다 </p>
                        </div>
                        
                        <div className="mainbox__applybox">
                            <Link to="#">
                            {/*<Link to="/apply">*/}
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
                        <h4 className="title_mobile"> 멋쟁이 사자처럼에서는 ...</h4>
                        <ColoredLine color="#F2A141" wid="70%"/>
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
                    <div className="curi__title">
                        <h3 className="text"> Curriculum </h3>
                        <hr/>
                        <p className="discription"> * 커리큘럼은 변동될 수 있습니다. </p>
                    </div>
                    <div className="curi__card">
                        <div className="elem-top">
                            <div className="elem">
                                <img src={html} alt="html" className="logo"/>
                            </div>
                            <div className="elem">
                                <img src={css} alt="css" className="logo"/>
                            </div>
                            <div className="elem">
                                <img src={js} alt="js" className="logo"/>
                            </div>
                            <div className="elem">
                                <img src={python} alt="python" className="logo"/>
                            </div>
                        </div>
                        <div className="elem-bottom">
                            <div className="elem">
                                <img src={react} alt="react" className="logo"/>
                            </div>
                            <div className="elem">
                                <img src={django} alt="django" className="logo"/>
                            </div>
                            <div className="elem">
                                <img src={git} alt="git" className="logo"/>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MainPage;