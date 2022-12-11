import React, { useState } from 'react';

import classes from './Input.module.scss';

const Input = (props) => {
    const [invalid, setInvalid] = useState(false);
    
    let inputElement = null;

    const onChangeInputHandler = (event) => {
        setInvalid(checkValidity(event.target.value, props.type, props.required));
        props.onChange(event.target.value);
    }

    const checkValidity = (value, type, required) => {
        if(!required) return;
        
        if(value == null || value === '') {
            return 'This field is required';
        }

        if(type === 'email' && !isValidEmail(value)) {
            return 'Please enter a valid ' + type;
        }

        return null;
    }

    const isValidEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    switch (props.type) {
        case 'textarea':
            inputElement = <textarea 
                className = { [classes.InputField, classes.Textarea, invalid ? classes.Error : ''].join(' ') } 
                { ...props }
                onChange = { onChangeInputHandler } />;
            break;

        default:
            inputElement = <input 
                className = { [classes.InputField, invalid ? classes.Error : ''].join(' ') } 
                { ...props }
                onChange = { onChangeInputHandler } />;
            break;
    }

    return (
    	<div className = { classes.Input }>
    		{ inputElement }
            { invalid && <p className = { classes.ErrorMessage } id = 'inputError'>{ invalid }</p> }
    	</div>
    );
}

export default Input;
