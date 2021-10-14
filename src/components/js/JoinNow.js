import React,{useState} from 'react'
import {Button, Card, Modal} from 'react-bootstrap'
import Man from '../css/image/manwoman.jpg'
import { Popup /* or Slider */ } from 'react-typeform-embed';

function JoinNow(props) {
  
    return (
        <div>
             <div className="join-now"
        style={{display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
            <Card style={{
                backgroundColor:"#EDEDED",
                boxShadow:"8px 8px 10px #ededed",
                borderRadius:"10px",
                color:"#545454",
                border:"1px solid #7e7e7e",overflow:"hidden"
            }}>
                <Card.Body style={{
                    
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}><div style={{
                    padding:"1em 2em",

                }}>
                    <h1 >Hemen Kaydol</h1>

                    <br></br>
                    <p>AIX ile Yapay Zekaya giriş eğitim programına şimdi kaydolun! Yapay zekayı <b>sıfır kod</b> ile işinize dahil edin. </p>
                    <div style={{
                        marginTop:"2em"
                    }}>
                   
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
                    </div>
                    <div style={{
                        padding:"0",
                        width:"50%"
                    }}>
                       


                        <img 
                        src={Man}
                        style={{
                            objectFit:"cover",
                            width:"100%",height:"100%",
                        
                        }}></img>
                    </div>
                </Card.Body>
            </Card>

        </div>
       
        </div>
    )
}

export default JoinNow;