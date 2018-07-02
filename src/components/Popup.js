import React, {Component} from 'react';
import './Popup.scss';
import IconR from '../images/react_icon.png';
import Axios from 'axios';

class Popup extends React.Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="close" onClick={this.props.closePopup}></div>
                    <div className="popup_inner_header">
                        <img src={IconR} className="react_icon" alt="react icon" />
                        <span>React App Project</span>
                    </div>
                    <form className="popup_inner_form">
                        <div className="popup_inner_input">
                            <label className="label_login"></label>
                            <input type="text" className="login_input" placeholder="username"/>

                        </div>
                        <div className="popup_inner_input">
                            <label className="label_password"></label>
                            <input type="password" className="password_input" placeholder="password" />
                        </div>
                        <button className="login_btn" >Sign In</button>
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
