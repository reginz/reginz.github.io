import React, { Component } from 'react';
import './NlpList.css';

class NlpList extends Component {
    render() {
        return (
            <div id="nlp-list">
            <div className="list-container">
                <div className="list-wrapper">
                    
                        <div className=" text text1">
                            <div data-aos="fade-left">
                            <b>Upload your data.</b> Either as a .cvs file downloaded from your source or as API connection transfer your data to NLP module.

                        
                        </div>
                        </div>
                        <div className=" text text2">
                            <div data-aos="fade-left">
                            <b>Choose your tags.</b> Select your tags from uploaded data or create them in our studio.

                            </div>
                        </div>
                        <div className=" text text3">
                            <div data-aos="fade-left">
                            <b>Train your model.</b> Match examples with proper tags.

                            </div>
                        </div>
                        <div className=" text text4">
                            <div data-aos="fade-left">
                            <b>Test your model.</b> Check if your model performs well enough to deploy with untagged data or manual input.

                            </div>
                        </div>
                        <div className=" text text5">
                            <div data-aos="fade-left">
                            <b>Deploy your model.</b> Put your model to work with API connections or upload data you want to tag.

                            </div>
                        </div>
                        <div className=" text text6">
                            <div data-aos="fade-left">
                            <b>Continuously improve your model.</b> You can always make your model more consistent by adding more training data or take action by our suggestions.
                            </div>
                        </div>
                 
                    
                        <div className="li li1"><h2>
                        <div data-aos="fade-right">
                            1
                            </div>
                        </h2>
                        
                        </div>
                        <div className="li li2"><h2>
                        <div data-aos="fade-right">
                            2
                            </div>
                        </h2>
                        
                        </div>
                        <div className="li li3"><h2>
                        <div data-aos="fade-right">
                            3
                            </div>
                        </h2>
                        
                        </div>
                        <div className="li li4"><h2>
                        <div data-aos="fade-right">
                            4
                            </div>
                        </h2>
                        
                        </div>
                        <div className="li li5"><h2>
                        <div data-aos="fade-right">
                            5
                            </div>
                        </h2>
                        
                        </div>
                        <div className="li li6"><h2>
                        <div data-aos="fade-right">
                            6
                            </div>
                        </h2>
                        
                        </div>

                        
                        

                     
                    
                </div>
                
            </div>
            </div>
        );
    }
}

export default NlpList;