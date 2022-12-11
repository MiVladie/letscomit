import React from 'react';

import { Link } from 'react-router-dom';
import Animation from '../../hoc/Animation/Animation';

import classes from './Discuss.module.scss';

const discuss = ({ text }) => {
    return (
        <section className = { classes.Discuss }>
            <Animation>
                <h2 className = { classes.Text }>{ text }</h2>
            </Animation>
            
            <Animation>
                <Link className = { classes.Button } to = '/contact'>Let's talk</Link>
            </Animation>
        </section>
    );
}

export default discuss;
