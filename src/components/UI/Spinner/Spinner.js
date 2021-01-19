import React from 'react';

import classes from './Spinner.module.scss';

const spinner = () => {
    return (
    	<div className = { classes.Centered }>
            <div className = { classes.Spinner }>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default spinner;
