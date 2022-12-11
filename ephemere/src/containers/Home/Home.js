import React from 'react';

import Banner from '../Banner/Banner';
import BlockLarge from '../../components/BlockLarge/BlockLarge';
import BlockMedium from '../../components/BlockMedium/BlockMedium';
import Discuss from '../../components/Discuss/Discuss';

import printsBack from '../../assets/home/prints_back.jpeg';
import printsFront from '../../assets/home/prints_front.png';
import barberBack from '../../assets/home/barber_back.jpg';
import barberFront from '../../assets/home/barber_front.png';
import discoverBack from '../../assets/home/discover_back.jpg';
import discoverFront from '../../assets/home/discover_front.png';
import salonBack from '../../assets/home/salon_back.jpg';
import salonFront from '../../assets/home/salon_front.png';

const home = () => {
    return (
    	<React.Fragment>    		
            <Banner link = 'home' scrollTo = 'welcome' />
            
			<BlockLarge
                id = 'intro'
				intro = 'A personal touch for a professional website'
				main = 'Build and expand your business'
				description = "Want to look different? With letscomit you're getting the full package from top to bottom. As a business, we help to cater to every specific need no matter how small so that we can help your vision straight to the web page."
				backImage = { printsBack }
                frontImage = { printsFront }
                textColor = '#151515'
				color = 'white' />

            <BlockMedium 
                main = 'Transparency is our biggest priority'
                description = "We won't keep you in the dark. We make sure you know how we make our websites, the steps involved and what we need from you."
                link = {{ text: 'Learn more', redirect: '/about' }}
                backImage = { barberBack }
                frontImage = { barberFront }
                textColor = 'white'
                color = '#766355' />

            <BlockLarge
				intro = 'Some of our work'
				main = "Businesses that we helped to grow"
				description = 'Still not convinced? Take a quick look of our previous work that we have done for other clients and see how businesses like your have benefitted from us.'
                link = {{ text: 'Learn more', redirect: '/projects' }}
				backImage = { discoverBack }
                frontImage = { discoverFront }
                textColor = 'white'
				color = '#616369' />
            
            <BlockMedium 
                main = "Let's see how we can help your business grow"
                description = "We are not limited to simply coding a website - we help small businesses thrive in every aspect. Take a look which one of our services fits best for you and your business."
                link = {{ text: 'Learn more', redirect: '/services' }}
                backImage = { salonBack }
                frontImage = { salonFront }
                textColor = 'white'
                color = '#613853'
                reversed />

            <Discuss
                text = 'Ready to discuss your ideas?' />

    	</React.Fragment>
    );
}

export default home;
