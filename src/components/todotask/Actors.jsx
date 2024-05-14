import React from 'react';

const Actors = ({propsData}) => {
    return (
        <div>
            <ul>
                <li>Name: {propsData}</li>
            </ul>
        </div>
    );
};

export default Actors;