import React from 'react';

const UserInfo = (userInfo) => {
    const { name, image, designation, detail, social } = userInfo.userInfo[0].userInfo;
    return (<div className="card userInfo">
        <div className="userImage">
            <img src={image} alt={name} />
        </div>
        <div className="userDetails">
            <div className="userName">
                <h3>{name}</h3>
                <span>{designation}</span>
            </div>
            <div className="userContact">
                {
                    social.map((item, index) => {
                        const { name, display, text } = item;
                        return (
                            <a href={text} key={index}><span className="material-icons">{name}</span>{display}</a>
                        )
                    })
                }
            </div>
            {
                detail.map((para, index) => {
                    return (
                        <p key={index}>{para}</p>
                    )
                })
            }
        </div>
    </div>)

}
export default UserInfo;