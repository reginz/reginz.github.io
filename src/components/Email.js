import React, { Component } from 'react';
import './Email.css';

class Email extends Component {
    render() {
        return (
            <div className="deneme-contianer">
                <div className="deneme-wrapper">
                
                    <p>
                    We will keep you informed of our progress.
                    </p>
                    <div className="email-button">
                        <button className="button"
                                style={{backgroundImage:"url(/images/button2_salt-min.png)"}}>
                                <a href="http://eepurl.com/hs6_un" target="_blank">
                                        Stay Updated
                                </a>
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                        </div>

                </div>
                
            </div>
        );
    }
}

export default Email;