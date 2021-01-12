import React from 'react';

const Skills = (skills) => {
    return (<div className="card">
        <div className="card-title">Front end</div>
        <ul className="card-body skills">
            {skills.skills.map((skill, index) => {
                const { name, score } = skill;
                return (<li key={index}><p>{name}</p><div className="progressBar"><span style={{ width: `${score}px` }}></span></div></li>)
            })}
        </ul>
    </div>)
}
export default Skills;