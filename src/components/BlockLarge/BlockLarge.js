import React from 'react';

import { Link } from 'react-router-dom';

import Animation from '../../hoc/Animation/Animation';

import classes from './BlockLarge.module.scss';

const blockLarge = ({ intro, main, link, description, backImage, frontImage, textColor, color }) => {
    return (
    	<section className = { classes.BlockLarge } style = {{ backgroundColor: color }}>
            <Animation>
                <div className = { classes.Text }>
                    <h3 className = { classes.Intro } style = {{ color: textColor }}>{ intro }</h3>
                    <h2 className = { classes.Main } style = {{ color: textColor }}>{ main }</h2>
                    <p className = { classes.Description } style = {{ color: textColor }}>{ description }</p>
                    { link && <Link to = { link.redirect } className = { classes.Learn } style = {{ color: textColor }}>{ link.text }</Link> }
                </div>
            </Animation>

            <Animation>
                <div className = { classes.Images }>
                    <img className = { classes.BackgroundImage } src = { backImage } alt = 'background' />
                    <img className = { classes.ForegroundImage } src = { frontImage } alt = 'foreground' />
                </div>
            </Animation>
    	</section>
    );
}

export default blockLarge;
