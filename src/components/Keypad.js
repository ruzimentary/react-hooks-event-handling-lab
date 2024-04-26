import React from 'react';

function Keypad (){
    const handleChange = () => {
        console.log("Enter")
    };
    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    );
};

export default Keypad;