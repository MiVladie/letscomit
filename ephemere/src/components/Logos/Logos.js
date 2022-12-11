import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Logos.module.scss';

const logos = ({ data }) => {
    return (
        <Animation>
            <section className = { classes.Logos }>
                { data.map((logo, index) => {
                    return (
                        <div className = { classes.Logo } key = { index }>
                            <img src = { logo } alt = 'logo' />
                        </div>
                    )
                }) }
            </section>
        </Animation>
    );
}

export default logos;
