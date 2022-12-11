import React from 'react';

import Line from '../UI/Line/Line';

import Animation from '../../hoc/Animation/Animation';
import classes from './Step.module.scss';

const step = ({ intro, main, description, image, color, textColor, lineColor, reversed }) => {
    return (
        <section className = { classes.Step } style = {{ backgroundColor: color, flexDirection: reversed && 'row-reverse' }}>
            <Animation>
                <div className = { classes.Text }>
                    <p className = { classes.Intro } style = {{ color: textColor }}>{ intro }</p>
                    <h2 className = { classes.Main } style = {{ color: textColor }}>{ main }</h2>
                    <div className = { classes.Line } ><Line color = { lineColor } /></div>
                    <p className = { classes.Description } style = {{ color: textColor }}>{ description }</p>
                </div>
            </Animation>

                <div className = { classes.Images } style = {{ left: reversed && 0, right: !reversed && 0 }}>
                    <img className = { classes.Image } src = { image } alt = 'example' />
                </div>
    	</section>
    );
}

export default step;
