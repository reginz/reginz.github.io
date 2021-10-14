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
        padding:"2em 0"}}>Eğitim İçeriği</h1>
        
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
                        <h2>1. AI Nedir?</h2>
                        <p>Terminoloji </p>
                        <p>Günümüzde derin öğrenmenin yapıp yapamadıkları ve diğer AI akımları </p>
                        <br></br><br></br>
                        <h2>2. AI Projeleri </h2>
                        <p>ML(Makine Öğrenmesi) ve DS(Veri Bilimi) projelerinde iş akışı </p>
                        <p>Veri ve Ekiplerinin seçimi ve gereksinimleri </p>
                        <p>AI için no-code çözümleri </p>
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
                        <h2>3. Şirket içi AI  </h2>
                        <p>AI proje ve ekiplerinin şirket içindeki rolü </p>
                        <p>Şirketin AI stratejisi ve AI dönüşümü </p>
                        <p>AI ana uygulama alanları </p>
                        <p>Pratik AI uygulamaları </p>
                        <br></br><br></br>
                        <h2>4. AI ve Etik  </h2>
                        <p>AI gerçekte nedir? Kötü amaca hizmet edebilir mi? </p>
                        <p>AI ve ekonomik etkiler </p>
                        <p>AI ve istihdam </p>
                        <br></br><br></br>

                        <h2>5. Sonuç ve kapanış   </h2>
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
                        borderRadius:"10px"}}>Hemen Kaydol</button>
                    </Popup>
        </div>
    );
}

export default CourseDet;