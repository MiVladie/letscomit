import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './IntroSmall.module.scss';

const introSmall = ({ main, description, color }) => {
    return (
        <section className = { classes.IntroSmall } style = {{ backgroundColor: color }}>
            <Animation style = {{ width: '100%' }}>
                { main && <h2 className = { classes.Main }>{ main }</h2> }
                { description && <p className = { classes.Description }>{ description }</p> }
            </Animation>
        </section>
    );
}

export default introSmall;
