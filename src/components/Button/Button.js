import React from 'react';

import './Button.css'

const button = (props) => {
    return (
        <input type='button' 
                id={props.id} 
                name='todo-textfield'
                className = "Button"
                value={props.value} 
                onClick={props.clicked} />
    );
}

export default button;