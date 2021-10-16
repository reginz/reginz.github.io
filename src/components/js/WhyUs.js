import React from 'react';
import Edu from '../css/image/edu.png'
import '../css/AcademyLanding.css'
import { Card } from 'react-bootstrap';
function WhyUs(props) {
    return (
        <>
        <div className="edu-container"
        style={{
            display:'flex',
            alignItems:"center"
        }}>
            <div className="col1"> 
            <img src={Edu}></img>
            </div>
            <div>
                <h1 > Why should you take this course?</h1>

                <div style={{display:"flex", alignItems:"center", fontSize:"20px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="#58ba91" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>

                <p>Practical and Applicable </p>
                </div>

                <div style={{display:"flex", alignItems:"center", fontSize:"20px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="#58ba91" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>

                <p>Inclusive</p>
                </div>

                <div style={{display:"flex", alignItems:"center", fontSize:"20px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="#58ba91" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>

                <p>Post Training Support</p>
                </div>
            </div>
        </div>


       
        </>
    );
}

export default WhyUs;