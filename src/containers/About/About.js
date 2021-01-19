import React from 'react';

import Banner from '../Banner/Banner';
import Intro from '../../components/Intro/Intro';
import Step from '../../components/Step/Step';
import IntroSmall from '../../components/IntroSmall/IntroSmall';
import Columns from '../../components/Columns/Columns';
import Logos from '../../components/Logos/Logos';
import Discuss from '../../components/Discuss/Discuss';

import facebook from '../../assets/icons/tool_facebook.png';
import twitter from '../../assets/icons/tool_twitter.png';
import instagram from '../../assets/icons/tool_instagram.png';
import youtube from '../../assets/icons/tool_youtube.png';
import firebase from '../../assets/icons/tool_firebase.png';
import googlemaps from '../../assets/icons/tool_googlemaps.png';

import research from '../../assets/about/research.jpg';
import build from '../../assets/about/build.jpg';
import deliver from '../../assets/about/deliver.jpg';

const About = () => {	
    return (
    	<React.Fragment>
    		<Banner link = 'about' scrollTo = 'welcome' />

			<Intro 
				main = 'Top-to-bottom product development'
				description = "We pay attention to what people want and love, providing an engaging product that hits the consumer with absolute confidence." />

			<Step
				intro = 'Step 1'
				main = 'Research'
				description = 'We want to know as much as we can about you and your business so that everyone on the web knows exactly who you and your business are.'
				image = { research }
				color = '#6C4F58'
				textColor = 'white'
				lineColor = 'white' />

			<IntroSmall
				main = 'How we do it'
				description = 'We have a simple three-step process that will help us find out as much as we can about you and your business.' />
			
			<Columns
				data = { [
					{ name: 'Asking', description: 'We ask relevant questions that help us know what we should showcase on the web. Our most important question is what you can offer and how you are better than the competition.' }, 
					{ name: 'Fact-finding', description: 'In order for us to analyse and find out facts about your business, we will ask specific questions that will give us answers about the details of your business.' }, 
					{ name: 'Highlighting', description: 'After we know facts, we highlight the key information from your business which allows us to give you the best exposure we can offer.' }] } 
				color = 'white' />

			<Step
				intro = 'Step 2'
				main = 'Build'
				description = 'For this part, you can kick back and relax as we build and design the perfect website.'
				image = { build }
				color = 'white'
				textColor = '#151515'
				lineColor = '#FF2C2C' />

			<IntroSmall
				main = 'How we do it'
				description = 'In order to give your clients the best exprience on the page, we use latest technologies and design trends to make sure that your business will stand out from the competition.' />
			
			<Logos 
				data = { [facebook, firebase, instagram, googlemaps, youtube, twitter] } />
						
			<Step
				intro = 'Step 3'
				main = 'Deliver'
				description = "After building your website we won't just leave you to it. As a part of our service, we will also help to maintain and update the website according to your needs and get your business name online."
				image = { deliver }
				color = '#616369'
				textColor = 'white'
				lineColor = 'white' />

			<IntroSmall
				main = 'How we do it'
				description = 'There are three essential elements for making sure that the website is delivered smoothly.' />
			
			<Columns
				data = { [
					{ name: 'Domain', description: 'As a part of our service, we will get your business name registered online, by setting up everything that is required for it.' }, 
					{ name: 'Hosting', description: "We make sure your website is running online. Load times and speed won't be an issue as the websites we make are stored on the fastest and securest host servers." }, 
					{ name: 'Maintenance', description: "Businesses change and introduce new ideas to attract more customers. We make sure that your website is always updated so that everyone knows what's new." }] }
				color = 'white' />

			<Discuss
                text = 'Ready to discuss your ideas?' />

    	</React.Fragment>
    );
}

export default About;
