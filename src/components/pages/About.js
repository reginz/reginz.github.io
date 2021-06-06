import React from 'react';
import AboutManifest from '../js/AboutManifest';
import Departments from '../js/Departments';
import Email from '../js/Email';
import { Helmet } from 'react-helmet';

const TITLE = 'AIX | About Us'

function About () {
    
        return (
            <div>
                <Helmet>
                    <title> {TITLE} </title>
                </Helmet>
                <AboutManifest/>
                <Email/>
                <Departments/>
                
            </div>
        );
    
}

export default About;