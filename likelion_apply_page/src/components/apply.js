import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import './apply.scss'

class ApplyPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            schoolId:'',
            phoneNumber:'',
            email:'',
            major:'',
            techStack:'',
            motivation:'',
            idea:''
        }
    }

    saveInfo = (e) =>{
        console.log(e.target.name, e.target.value)
        const value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    submitHandler = () =>{
        let form_data = new FormData()
        
        form_data.set('name', this.state.name)
        form_data.set('school_id', this.state.schoolId)
        form_data.set('phone_number', this.state.phoneNumber)
        form_data.set('email', this.state.email)
        form_data.set('major', this.state.major)
        form_data.set('tech_stack', this.state.techStack)
        form_data.set('motivation', this.state.motivation)
        form_data.set('idea', this.state.idea)

        axios.post('http://127.0.0.1:8000/adminpage/apply/', form_data,{
            headers: {
                X_CSRFTOKEN: Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res.data) 
        }).catch(err=> console.log(err))

    }

    render(){
        return(
            <div className="applyWrapper">
                <div className="apply">
                    <div className="title">
                        <h3> 멋쟁이 사자처럼 8기 지원하기 </h3>
                        <hr/>
                    </div>
                    <div className="applyCard">
                        <div className="applyCard__title">
                            <h4> 인적사항 </h4>
                        </div>
                        <div className="applyCard__userinfo">
                            <h5> 이름 </h5>
                            <input className="name" type="text" name="name" onChange={this.saveInfo}/>
                            <h5> 학번 </h5>
                            <input className="schoolId" type="text" name="schoolId" onChange={this.saveInfo}/>
                            <h5> 전화번호 </h5>
                            <input className="phone" type="text" name="phoneNumber" onChange={this.saveInfo}/>
                            <h5> 이메일 </h5>
                            <input className="email" type="text" name="email" onChange={this.saveInfo}/>
                            <h5> 관심분야 (전공) </h5>
                            <input className="major" type="text" name="major" onChange={this.saveInfo}/>
                            <h5> 기술 스택 및 경력(개인 프로젝트, 창업 등) </h5>
                            <textarea 
                                className="techStack"
                                placeholder="여기에 적으세요"
                                name="techStack" 
                                onChange={this.saveInfo}
                            />
                        </div>
                        <div className="applyCard__coverletter">
                            <h5> 지원동기 </h5>
                            <textarea 
                                className="motivation"
                                placeholder="여기에 적으세요"
                                name="motivation" 
                                onChange={this.saveInfo}
                                maxlength="300"
                            />
                            <h5> 창업 아이디어 </h5>
                            <textarea 
                                className="idea"
                                placeholder="여기에 적으세요"
                                name="idea" 
                                onChange={this.saveInfo}
                                maxlength="300"
                            />
                        </div>
                        <div className="applyCard__buttonwrapper">
                            <button className="submit" onClick={this.submitHandler}>
                                제출하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApplyPage;