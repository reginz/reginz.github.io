import React from 'react';
import AboutManifest from '../AboutManifest';
import Departments from '../Departments';
import Email from '../Email';
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