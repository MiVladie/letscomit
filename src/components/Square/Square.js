import React from 'react';

import classes from './Square.module.scss';

const square = ({ text }) => {
    return (
    	<div className = { classes.Square }>
            <h1 className = { classes.Promo }>{ text }</h1>
    	</div>
    );
}

export default square;
