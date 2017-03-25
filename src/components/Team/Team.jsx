import React from 'react';

import './Team.styl';
import Article from '../Article/Article';
import EmployeeGrid from '../EmployeeGrid/EmployeeGrid';


const Team = () => {
    const employees = new Array(10).fill({
        photo: 'https://html5book.ru/wp-content/uploads/2015/10/snow-road.jpg',
        name: 'John Doe'
    });

    return (
        <div className="team">
            <Article 
                title='Meet out team'
                subtitle='Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.'
                theme='light'
            >
                <div className="team__employee-grid">
                    <EmployeeGrid employees={employees} />
                </div>
            </Article>
        </div>
    );
}

export default Team;