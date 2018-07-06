import React, {Component} from 'react';
import './Popup.scss';
import IconR from '../images/react_icon.png';

import axios from 'axios';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://fed-blog.herokuapp.com/api/v1/security/login' , {
            name: this.state.username,
            password: this.state.password,
            header: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="close" ></div>
                    <div className="popup_inner_header">
                        <img src={IconR} className="react_icon" alt="react icon" />
                        <span>React App Project</span>
                    </div>
                    <form className="popup_inner_form" onSubmit={this.handleSubmit}>
                        <div className="popup_inner_input">
                            <label className="label_login"></label>
                            <input type="text"   className="username" name="username" placeholder="username" onChange={this.handleChange}
                            />

                        </div>
                        <div className="popup_inner_input">
                            <label className="label_password"></label>
                            <input type="password"  className="password" name="password" placeholder="password" onChange={this.handleChange}

                            />
                        </div>
                        <button className="login_btn" type="submit">Sign In</button>
                    </form>
                    <div className="popup_inner_socials">
                        <button className="facebook_btn"></button>
                        <button className="twitter_btn"></button>
                    </div>
                    <a className="forgot_link" href="#">Forgot Password?</a>
                </div>
            </div>
        );
    }
}

export default Popup;
