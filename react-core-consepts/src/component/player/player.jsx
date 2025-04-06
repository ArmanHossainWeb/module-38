import React from 'react';
import "./player.css"


const Player = ({name,age}) => {
    return (
        <div className='player'>
            <h1>player name : {name}</h1>
            <p>player age : {age}</p>
        </div>
    );
};

export default Player;