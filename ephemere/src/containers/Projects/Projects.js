import React from 'react';

import Banner from '../Banner/Banner';
import Intro from '../../components/Intro/Intro';
import BlockMedium from '../../components/BlockMedium/BlockMedium';
import Projects from '../../components/Projects/Projects';
import Discuss from '../../components/Discuss/Discuss';

import cafeBack from '../../assets/projects/cafe_back.jpg';
import cafeFront from '../../assets/projects/cafe_front.png';
import bakeryBack from '../../assets/projects/bakery_back.jpg';
import bakeryFront from '../../assets/projects/bakery_front.png';
import beautyBack from '../../assets/projects/beauty_back.jpg';
import beautyFront from '../../assets/projects/beauty_front.png';

import lookinfoxxy from '../../assets/projects/lookinfoxxy.png';
import lakeroad from '../../assets/projects/lakeroad.png';
import journeyplanner from '../../assets/projects/journeyplanner.png';
import beaute from '../../assets/projects/beaute.png';
import beautyatluxx from '../../assets/projects/beautyatluxx.png';
import shergilldesign from '../../assets/projects/shergilldesign.png';
import ashkaesthetics from '../../assets/projects/ashkaesthetics.png';

const projects = () => {
    return (
    	<React.Fragment>    		
            <Banner link = 'projects' scrollTo = 'welcome' />

			<Intro 
				main = 'Our recent work'
				description = "Below you will see our recent work we have done for our clients. With their vision in mind, we've brought their ideas straight onto the web page." />

            <BlockMedium 
                main = 'Let us power your local business online'
                description = "No matter what type of business you have - we've got you covered. With our top-to-bottom development approach, we give you the best exposure possible by getting your name online."
                backImage = { cafeBack }
                frontImage = { cafeFront }
                textColor = 'white'
                color = '#766355' />
            
            <Projects
                data = { [
                    { name: 'Ashk Aesthetics', description: 'A website designed and build for a beauty salon in Ealing, London', image: ashkaesthetics, link: 'https://mivladie.github.io/ashkaesthetics/' },
                    { name: 'Beauty at Luxx', description: 'A white-and-pink-themed website designed for a beauty salon in London', image: beautyatluxx, link: 'https://mivladie.github.io/beautyatluxx/' }
                ] } />

            <BlockMedium 
                main = 'First impression is key for your success'
                description = "You never get a second chance to make a first impression. Let us apply our best development tactics we use to help you win your potential customer through the best user experience on the web page."
                backImage = { beautyBack }
                frontImage = { beautyFront }
                textColor = 'white'
                color = '#613853'
                reversed />
                
            <Projects
                data = { [
                    { name: 'Journey Planner', description: 'We have built a journey planner for London that will show best available routes.', image: journeyplanner, link: 'https://mivladie.github.io/journeyplanner' },
                    { name: 'Beauté', description: 'An elegant website designed and developed for a Beauty & Hair salon.', image: beaute, link: 'https://mivladie.github.io/beaute' },
                ] } />

            <BlockMedium 
                main = 'Stand out from competition with a professional website'
                description = "Clients choose the best they can find. At letscomit we provide outstanding websites for your business to let you win from your competitors."
                backImage = { bakeryBack }
                frontImage = { bakeryFront }
                textColor = 'white'
                color = '#766355' />

            <Projects
                data = { [
                    { name: 'Shergill Design', description: 'Website designed for a small architect services business based in West London', image: shergilldesign, link: 'https://mivladie.github.io/shergilldesign/' },
                    { name: 'Lookin Foxxy', description: 'A dark-themed stylish website built for one of our recent clients for their hair salon. ', image: lookinfoxxy, link: 'https://mivladie.github.io/lookinfoxxy' },
                    { name: 'Lakeroad', description: 'Website built for a small french group named Lakeroad to promote their band.', image: lakeroad, link: 'https://mivladie.github.io/lakeroad' }
                ] } />

            <Discuss
                text = 'Ready to discuss your ideas?' />

    	</React.Fragment>
    );
}

export default projects;
