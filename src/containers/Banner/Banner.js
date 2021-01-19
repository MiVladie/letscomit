import React from 'react';

import Square from '../../components/Square/Square';

import classes from './Banner.module.scss';

const banner = ({ link, scrollTo }) => {
    let promo;
    let background;

    switch(link) {
        case 'home':
            promo = 'We build you grow';
            background = classes.Home;
            break;
            
        case 'about':
                promo = 'Main mission';
                background = classes.About;
                break;
                
        case 'projects':
                promo = 'The showcase';
                background = classes.Projects;
                break;
                
        case 'services':
                promo = 'What we will do';
                background = classes.Services;
                break;
        
        case 'contact':
                promo = 'How can we help?';
                background = classes.Contact;
                break;
        default:
            break;
    }

    return (
        <section className = { classes.Banner }>
                <div className = { [classes.Background, background].join(' ') } />            
                <Square text = { promo } />        
                { scrollTo && <button className = { classes.Scroll } id = 'welcome' onClick = { () => document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' }) } /> }
        </section>
    );
}

export default banner;
