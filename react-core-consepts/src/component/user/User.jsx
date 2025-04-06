import React from 'react';
import "./User.css"


const User = () => {

    const person ={
        name: "Hedy Lamarr",
        image: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize : 90
    }

    return (
        <div className='background'>
            <h3>{person.name}</h3>
            <img src={person.image} alt="" className='image' />
        </div>
    );
};

export default User;