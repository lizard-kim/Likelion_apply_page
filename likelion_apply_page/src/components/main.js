import React from 'react';
import { Link } from 'react-router-dom'
import './main.scss';

class MainPage extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="mainbox">
                    <div className="mainbox__slogan">
                        <h1> "HACK YOUR LIFE" </h1>
                    </div>
                    <div className="mainbox__name">
                        <h1> 멋쟁이 사자처럼 8기 </h1>
                    </div>
                    <hr/>
                    <div className="mainbox__duedate">
                        <h3> 모집기간 : 2020.03.14 ~ 2020.03.21 </h3>
                    </div>
                    
                    <div className="mainbox__applybox">
                        <Link to="/users">
                            <div className="button">
                                <h1> Apply! </h1>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainPage;