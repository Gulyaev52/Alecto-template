import React from 'react';

import './About.styl';
import Article from '../Article/Article';
import EmployeeGrid from '../EmployeeGrid/EmployeeGrid';


const About = () => { 
    return (
        <div className="about">
            <Article 
                title='About us'
                subtitle='Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.'
            >
                <div className="about__"> 
                </div>
            </Article>
        </div>
    );
}

export default About;