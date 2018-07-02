import React, {Component} from 'react';
import Popup from '../Popup';

import './HeaderBlock.scss'

class HeaderBlock extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render(){
        return (
            <div className="header">
                <div className="user_area">
                    <button onClick={this.togglePopup.bind(this)} className="login">Login</button>
                    <button className="register">Register</button>
                </div>
                {this.state.showPopup ?
                    <Popup
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }

};

export default HeaderBlock;
