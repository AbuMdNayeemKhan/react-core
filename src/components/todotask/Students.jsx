import React from 'react';

const Students = ({students}) => {
    return (
        <div>
            <h6>Id: {students.id}</h6>
            <h6>Name: {students.name}</h6>
            <h6>Age: {students.job}</h6>
        </div>
    );
};

export default Students;