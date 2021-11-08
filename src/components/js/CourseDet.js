import React from 'react';
import AI from '../css/image/robot.png'
import Man from '../css/image/man.png';
import { Popup /* or Slider */ } from 'react-typeform-embed';
import '../css/CourseDet.css'
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
                    <div style={{width:"50%"}} className="course-img-wrapper">
                     <img src={AI} style={{width:"100%"}}></img>
                     </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"1em"
                    }}
                    className="course-col">
                        <h2>1. What is AI?</h2>
                        <p className="subsection"><b>1.1 Foundation of AI </b></p>
                        <p className="subsubsection">1.1.1 AI in philosophy, mathematics, economics, neuroscience, psychology, computer science, linguistics </p>
                        <p className="subsubsection">1.1.2 Control theory and cybernetics</p>
                        <p className="subsubsection">1.1.3Yapay Zeka, Agents, Machine Learning, Deep Learning, Probabilistic reasoning and models, Neural Nets, Big Data</p>
                        <p className="subsection"><b> 1.2 What Deep Learning can and can't do and the other AI trends </b></p>
                        <p className="subsubsection">1.2.1 Supervised / Unsupervised, Reinforcement learning, Symbolic reasoning, evolutionary algorithms</p>
                        <br></br><br></br>
                        <h2>2. AI Projects </h2>
                        <p className="subsection"><b>2.1 Workflow in ML(Machine Learning) and DS(Data Science) projects </b></p>
                        <p className="subsubsection"> 2.1.1 Data collection, model building, testing and iteration, edge and cloud implementation, production ready models</p>
                        <p className="subsection"><b> 2.2 Selection and requirements of Data and its Teams </b></p>
                        <p className="subsubsection">2.2.1 Data engineering, ML engineering, Data Science, MLOps </p>
                        <p className="subsection"><b>2.3 No-Code solutions for AI </b></p>
                        <p className="subsubsection">2.3.1 Hugging face, Google Cloud, MonkeyLearn</p>
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
                        <p className="subsection"><b>3.1 The role of AI projects and teams within the company </b></p>
                        <p className="subsubsection">3.1.1 Projections examples and importance, Outlining AI strategy </p>
                        <p className="subsection"><b>3.2 The company's AI strategy and AI transformation </b></p>
                        <p className="subsection"><b>3.3 AI main application areas </b></p>
                        <p className="subsubsection">3.3.1 NLP, Computer Vision, Speech Recognition</p>
                        <p className="subsection"><b>3.4 Practical AI applications </b></p>
                        <p className="subsubsection">3.4.1 eCommerce, Customer service, Recruiting, Predictive and Prescriptive Analytics</p>
                        <br></br><br></br>
                        <h2>4. AI and Ethics  </h2>
                        <p className="subsection"><b>4.1 What is AI really? Could it serve a bad purpose? </b></p>
                        <p className="subsubsection">4.1.1 Bias, Security and privacy, Robot rights, AI safety and friendly AI, Opening Blackbox</p>
                        <p className="subsection"><b>4.2 AI and economic effects </b></p>
                        <p className="subsubsection">4.2.1 Employment, automation, a world without work</p>
                        <p className="subsection"><b>4.3 Future of AI</b></p>
                        <p className="subsubsection">4.3.1 Artificial General Intellignece</p>
                        <br></br><br></br>

                        <h2>5. Conclusion and closing   </h2>
                    </div>

                    <div style={{width:"50%"}}className="course-img-wrapper">
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