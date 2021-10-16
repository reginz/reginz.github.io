import React from 'react';
import AI from '../css/image/robot.png'
import Man from '../css/image/man.png';
import { Popup /* or Slider */ } from 'react-typeform-embed';

function CourseDet(props) {
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            paddingBottom:"3em"
        }} id="course">

            <h1 style={{color:"#545454",
        padding:"2em 0"}}>Course Content</h1>
        
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"4em",
                color:"#545454"
            }}>
                <div style={{
                    display:"flex",
                    gap:"3em",
                    alignItems:"center",
                    justifyContent:"center"

                }} id="course-col-wrapper">
                    <div style={{width:"20%"}} className="course-img-wrapper">
                     <img src={AI} style={{width:"100%"}}></img>
                     </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"1em"
                    }}
                    className="course-col">
                        <h2>1. What is AI?</h2>
                        <p>Terminology </p>
                        <p>
                            What Deep Learning can and can't do and the other AI trends </p>
                        <br></br><br></br>
                        <h2>2. AI Projects </h2>
                        <p>Workflow in ML(Machine Learning) and DS(Data Science) projects </p>
                        <p>Selection and requirements of Data and its Teams </p>
                        <p>No-Code solutions for AI </p>
                    </div>
                   
                </div>



                <div style={{
                    display:"flex",
                    gap:"3em",
                    alignItems:"center",
                    justifyContent:"center"
                }}
                id="course-col-wrapper">
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"1em",
                        
                    }}
                    className="course-col">
                        <h2>3. On-premises AI  </h2>
                        <p>The role of AI projects and teams within the company </p>
                        <p>The company's AI strategy and AI transformation </p>
                        <p>AI main application areas </p>
                        <p>Practical AI applications </p>
                        <br></br><br></br>
                        <h2>4. AI and Ethics  </h2>
                        <p>What is AI really? Could it serve a bad purpose? </p>
                        <p>AI and economic effects </p>
                        <p>AI and employment </p>
                        <br></br><br></br>

                        <h2>5. Conclusion and closing   </h2>
                    </div>

                    <div style={{width:"30%"}}className="course-img-wrapper">
                    <img src={Man} style={{width:"100%"}}></img>
                    </div>

                   
                </div>



            </div>
            <br></br><br></br>
            <Popup id="NhcIWMIw" size={80}>
                    <button style={{
                        padding:"1em 2em",
                        backgroundColor:"#58ba91",
                        color:"white",
                        fontSize:"20px",
                        border:"none",
                        borderRadius:"10px"}}>Enroll Now</button>
                    </Popup>
        </div>
    );
}

export default CourseDet;