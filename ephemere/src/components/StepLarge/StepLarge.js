import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './StepLarge.module.scss';

const StepLarge = ({ number, name, color }) => {
    return (
        <section className = { classes.StepLarge } style = {{ backgroundColor: color }}>
            <Animation>
                <p className = { classes.Number }>{ number }</p>
                <h2 className = { classes.Name }>{ name }</h2>
            </Animation>
        </section>
    );
}

export default StepLarge;
