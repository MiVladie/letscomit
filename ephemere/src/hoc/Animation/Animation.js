import React, { useState, useEffect } from 'react';

import classes from './Animation.module.scss';

const Animation = (props) => {
    const [animate, setAnimate] = useState(false);
    const key = useState(Math.random().toFixed(4).toString())[0];

    useEffect(() => {
        animationScroll();
    });

    const animationScroll = () => {
        if(animate)
            return;

        let percentage = 10;

        
        if(window.screen.width >= 720)
            percentage = 20;
        
        let element = document.getElementById(key); 

        if(!element)
            return;

        let visible = ((window.screen.height - element.getBoundingClientRect().top) * 100 / window.screen.height).toFixed(0);

        if(visible >= percentage)
            setAnimate(true);
    }

    window.addEventListener('scroll', () => {
        animationScroll();
    });
         
    return (
    	<div className = { [animate ? classes.Animation : classes.Hide, props.className].join(' ') } style = { props.style } id = { key }>
    		{ props.children }
    	</div>
    );
}

export default Animation;
