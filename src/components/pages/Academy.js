import React from 'react';
import AcademyLanding from '../js/AcademyLanding';
import CourseDet from '../js/CourseDet';
import JoinNow from '../js/JoinNow';
import WhyUs from '../js/WhyUs';

function Academy(props) {
    return (
        <div>
            <AcademyLanding />
            <CourseDet />
            <WhyUs />
            <JoinNow />
        </div>
    );
}

export default Academy;