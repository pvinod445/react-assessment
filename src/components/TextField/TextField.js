import React from 'react';
import  './TextField.css';

const textField = () => {
    return (
        <input type='text' 
                name='todo-textfield' 
                className="TextField"
                placeholder="Enter event"
                 />
    );
}

export default textField;