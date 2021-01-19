import React from 'react';

import { Link } from 'react-router-dom'

import Animation from '../../hoc/Animation/Animation';

import classes from './BlockMedium.module.scss';

const blockMedium = ({ main, description, link, backImage, frontImage, color, textColor, reversed }) => {
    return (
        <section className = { classes.BlockMedium } style = {{ backgroundColor: color }}>
            <Animation style = {{ flexDirection: reversed && 'row-reverse' }}>
                <div className = { classes.Text }>
                    <h2 className = { classes.Main } style = {{ color: textColor }}>{ main }</h2>
                    <p className = { classes.Description } style = {{ color: textColor }}>{ description }</p>
                    { link && <Link className = { classes.Learn } style = {{ color: textColor }} to = { link.redirect }>{ link.text }</Link> }
                </div>
            </Animation>

            <div className = { classes.Images } style = {{ left: reversed && 0, right: !reversed && 0 }}>
                <img className = { classes.BackgroundImage } src = { backImage } alt = 'background' />
                <img className = { classes.ForegroundImage } src = { frontImage } alt = 'foreground' />
            </div>
    	</section>
    );
}

export default blockMedium;
