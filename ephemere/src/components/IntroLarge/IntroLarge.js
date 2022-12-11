import React from 'react';

import Line from '../UI/Line/Line';

import Animation from '../../hoc/Animation/Animation';
import classes from './IntroLarge.module.scss';

const introLarge = ({ main }) => {
    return (
        <Animation>
            <section className = { classes.IntroLarge }>
                <h1 className = { classes.Main }>{ main }</h1>
                <div className = { classes.Line }><Line color = '#FF2C2C' /></div>
            </section>
        </Animation>
    );
}

export default introLarge;
