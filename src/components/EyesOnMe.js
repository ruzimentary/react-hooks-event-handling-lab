import React from 'react';

function EyesonMe () {
    const handleFocus = () => {
        console.log("Great")
    };

    const handleBlur = () => {
        console.log("Eyes over here!")
    };

    return (
        <button onFocus = { handleFocus } onBlur = { handleBlur}>
            Eyes on me!
        </button>
)};
export default EyesonMe;
    