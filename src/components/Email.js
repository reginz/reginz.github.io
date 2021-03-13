import React, { Component } from 'react';
import './Email.css';

class Email extends Component {
    render() {
        return (
            <div className="deneme-contianer">
                <div className="deneme-wrapper">
                    <h2>
                        Stay Updated
                    </h2>
                    <p>
                    We will keep you informed of our progress.
                    </p>
                    <form action="/">
                    <label>
                        <input type="email" name="email" placeholder="Enter email" ></input>
                    </label>
                    </form>

                </div>
                
            </div>
        );
    }
}

export default Email;