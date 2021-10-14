import React from 'react';
import '../css/NlpLanding.css';
import '../css/AcademyLanding.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function AcademyLanding(props) {


    return (
        <div className="  nlp-landing-container" id="academy-landing-container">
                <div className="nlp-landing-wrapper">
                    <div className="nlp-banner-wrapper">
                    <h1>AI 101</h1>
                    <p>
                        Yapay zekanın ilham verici dünyasına girin ve yapay zeka dönüşümüne siz de katılın. İşinizde <b>sıfır kodla</b> nasıl yapay zekayı dahil edersiniz,
                        yapay zeka takımlarını nasıl kurup yönetirsiniz ve çok daha fazlasını öğrenin.
                         </p>
                        <hr></hr>
                        <AnchorLink href="#course">
                        <button className="nlp-button button"
                                style={{backgroundImage:"url(/images/button_white.webp)"}}>
                                
                                        Eğitim İçeriği
                                    
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                                </AnchorLink>
                    </div>
                </div>
            </div>
    );
}

export default AcademyLanding;