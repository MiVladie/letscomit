import React from 'react';

import Line from '../UI/Line/Line';

import Animation from '../../hoc/Animation/Animation';
import classes from './Intro.module.scss';

const intro = ({ main, description }) => {
    return (
        <Animation>
            <section className = { classes.Intro }>
                <h2 className = { classes.Main }>{ main }</h2>
                <div className = { classes.Line }><Line color = '#FF2C2C' /></div>
                <p className = { classes.Description }>{ description }</p>
            </section>
        </Animation>
    );
}

export default intro;
