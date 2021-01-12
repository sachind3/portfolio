import React from 'react'
const Hobbies = (hobbies) => {
    return (<div className="card">
        <div className="card-title">Hobbies</div>
        <ul className="card-body hobbies">
            {hobbies.hobbies.map((hobbies, index) => {
                const { name, image, detail } = hobbies;
                return (<li key={index}>
                    <img src={image} alt={name} />
                    <h4>{name}</h4>
                    <p>{detail}</p>
                </li>)
            })}
        </ul>
    </div>)
}
export default Hobbies