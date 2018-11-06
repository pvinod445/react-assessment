import React from 'react';

import  './CheckBox.css'

const checkBox = (props) => {
    return (
        <input id={props.id} 
                type='checkbox' 
                className= "Checkbox"
                name='todo-checkbox' 
                value={props.value}  
                onChange={props.changeHandler} />
    );
}

export default checkBox;