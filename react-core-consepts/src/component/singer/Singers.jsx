import React from 'react';

const Singers = ({singer}) => {
    return (
        <div>
            <h1>name:{singer.name} </h1>
            <p>age: {singer.age}</p>
        </div>
    );
};

export default Singers;