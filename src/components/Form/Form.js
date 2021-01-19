import React, { useState } from 'react';

import Input from '../UI/Input/Input';

import Animation from '../../hoc/Animation/Animation';
import classes from './Form.module.scss';

const Form = ({ data, submit, error }) => {
    const [hasErrors, setHasErrors] = useState(true);
    const [result, setResult] = useState({});

    const isValidEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const inputChangeHandler = (value, field) => {
        let res = { ...result, [field.name]: value };

        setResult(res);
        
        for(let section of data) {
            for(let field of section.fields) {
                if(field.required && (res[field.name] == null || res[field.name] === '')) {
                    setHasErrors(true);
                    return;
                }

                if(field.required && field.type === 'email' && !isValidEmail(res[field.name])) {
                    setHasErrors(true);
                    return;
                }
            }
        }
        
        setHasErrors(false);
    }

    const submitButtonHandler = (event) => {
        event.preventDefault();
        submit.onSubmit(result);
    }

    let sections = data.map(section => {
        return (
            <div className = { classes.Section } key = { section.title }>
                <Animation>
                    <h3 className = { classes.Title }>{ section.title }</h3>
                    { section.fields.map(field => {
                        let component = <Input
                            onChange = { (value) => inputChangeHandler(value, field) }
                            value = { result[field.name] == null ? '' : result[field.name] } 
                            type = { field.type }
                            placeholder = { field.placeholder + (field.required ? '*' : '') } 
                            required = { field.required }
                            key = { field.name } />;

                        return component;
                    }) }
                </Animation>
            </div>
        );
    });

    let button = <button
                type = 'submit'
                disabled = { hasErrors }
                className = { classes.Button }
                onClick = { submitButtonHandler }>
                { submit.name }
            </button>;

    let errorMessage = error && <p className = { classes.SubmitError }>{ error }</p>;

    return (
        <form className = { classes.Form }>
            { sections }
            <Animation style = {{ width: '100%' }}>{ button }</Animation>
            { errorMessage }
        </form>
    );
}

export default Form;
