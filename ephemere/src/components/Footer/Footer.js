import React from 'react';

import { Link } from 'react-router-dom';

import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/email.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
import pinterest from '../../assets/icons/pinterest.png';

import classes from './Footer.module.scss';

const footer = () => {
    return (
    	<footer className = { classes.Footer }>
            <div className = { classes.Main }>
                <div className = { classes.About }>
                    <h1 className = { classes.Brand }>letscomit<span>.</span></h1>
                    <p className = { classes.Description }>A small team of two, with letscomit we build your website from the ground up keeping your vision in mind.</p>
                </div>

                <div className = { classes.Links }>
                    <h1 className = { classes.Name }>Links</h1>
                    <ul className = { classes.Pages }>
                        <li className = { classes.Page }><Link to = '/'>Home</Link></li>
                        <li className = { classes.Page }><Link to = '/about'>About</Link></li>
                        <li className = { classes.Page }><Link to = '/projects'>Projects</Link></li>
                        <li className = { classes.Page }><Link to = '/services'>Services</Link></li>
                    </ul>
                </div>
                
                <div className = { classes.Follow }>
                    <h1 className = { classes.Name }>Follow</h1>
                    <ul className = { classes.Pages }>
                        <li className = { classes.Page }><p className = { classes.Social }><img src = { facebook } className = { classes.Logo } alt = 'facebook' /><a href = 'https://facebook.com/letscomit' target = '_blank' rel = 'noopener noreferrer'>Facebook</a></p></li>
                        <li className = { classes.Page }><p className = { classes.Social }><img src = { twitter } className = { classes.Logo } alt = 'twitter' /><a href = 'https://twitter.com/letscomit' target = '_blank' rel = 'noopener noreferrer'>Twitter</a></p></li>
                        <li className = { classes.Page }><p className = { classes.Social }><img src = { instagram } className = { classes.Logo } alt = 'instagram' /><a href = 'https://instagram.com/letscomit' target = '_blank' rel = 'noopener noreferrer'>Instagram</a></p></li>
                        <li className = { classes.Page }><p className = { classes.Social }><img src = { pinterest } className = { classes.Logo } alt = 'pinterest' /><a href = 'https://pinterest.com/letscomit' target = '_blank' rel = 'noopener noreferrer'>Pinterest</a></p></li>
                    </ul>
                </div>

                <div className = { classes.Question }>
                    <h1 className = { classes.Name }>Have questions?</h1>
                    <div className = { classes.Contact }>
                        <Link className = { classes.GetInTouch } to = '/contact'>Get In Touch</Link>
                        <p className = { classes.Or }>or</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { phone } alt = 'phone' />
                        <p className = { classes.Text }>+44 7342 216193</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { mail } alt = 'mail' />
                        <p className = { classes.Text }>letscomit@gmail.com</p>
                    </div>
                </div>
            </div>

            <p className = { classes.Copyright }>Copyright letscomit &copy;{ new Date().getFullYear() } All rights reserved</p>
    	</footer>
    );
}

export default footer;