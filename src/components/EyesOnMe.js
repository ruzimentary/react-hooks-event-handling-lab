import React from 'react';

function EyesonMe () {
    const handleFocus = () => {
        console.log("Good!")
    };

    const handleBlur = () => {
        console.log("Hey! Eyes on me!")
    };

    return (
        <button onFocus = { handleFocus } onBlur = { handleBlur}>
            Eyes on me!
        </button>
)};
export default EyesonMe;
    