import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';

const Navigation = ({ active }) => {
    const [scrolled, setScrolled] = useState(false);

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if(!expand) document.body.style.overflow = 'visible';
        else document.body.style.overflow = 'hidden';
    });

    const expandMenuHandler = (event) => {
        event.preventDefault();
        setExpand(!expand);
    }
    
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 75);  
    });

    return (
    	<nav className = { [classes.Navigation, scrolled ? classes.Scrolled : '', expand ? classes.Expand : ''].join(' ') }>
            <Link className = { classes.Brand } to = '/' onClick = { () => setExpand(false) }>
                <h1>letscomit<span>.</span></h1>
            </Link>

            <button className = { classes.Menu } onClick = { (event) => expandMenuHandler(event) } />

            <ul className = { classes.Links }>
                <li className = { [classes.Link, active === 'about' ? classes.Active : ''].join(' ') }>
                    <Link className = { classes.Text } to = '/about' onClick = { () => setExpand(false) }>About</Link>
                    <div className = { classes.About } />
                </li>
                
                <li className = { [classes.Link, active === 'projects' ? classes.Active : ''].join(' ') }>
                    <Link className = { classes.Text } to = '/projects' onClick = { () => setExpand(false) }>Projects</Link>
                    <div className = { classes.Projects } />
                </li>
                
                <li className = { [classes.Link, active === 'services' ? classes.Active : ''].join(' ') }>
                    <Link className = { classes.Text } to = '/services' onClick = { () => setExpand(false) }>Services</Link>
                    <div className = { classes.Services } />
                </li>
            </ul>

            <Link className = { classes.Contact } to = '/contact' onClick = { () => setExpand(false) }>Get In Touch</Link>
    	</nav>
    );
}

export default Navigation;
