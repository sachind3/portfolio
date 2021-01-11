import React from 'react'
const Experiences = (experiences) => {
    return (<div className="card">
        <div className="card-title">Experiences</div>
        <ul className="card-body experiences">
            {experiences.experiences[0].experiences.map((experiences, index) => {
                const { date, image, detail, designation } = experiences;
                return (<li key={index}>
                    <img src={image} alt={designation} />
                    <div>
                        <span>{date}</span>
                        <h4>{designation}</h4>
                        <p>{detail}</p>
                    </div>
                </li>)
            })}
        </ul>
    </div>)
}
export default Experiences