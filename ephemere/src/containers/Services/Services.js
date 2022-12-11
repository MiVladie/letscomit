import React from 'react';

import Banner from '../Banner/Banner';
import Intro from '../../components/Intro/Intro';
import StepLarge from '../../components/StepLarge/StepLarge';
import IntroSmall from '../../components/IntroSmall/IntroSmall';
import Columns from '../../components/Columns/Columns';
import Discuss from '../../components/Discuss/Discuss';

const services = () => {
    return (
    	<React.Fragment>    		
            <Banner link = 'services' scrollTo = 'welcome' />
            
			<Intro 
				main = 'Interested in our services?'
				description = "Let us walk you through the services we provide and show how we can help your business thrive." />

            <StepLarge
                number = '01'
                name = 'Design'
                color = 'white' />

            <IntroSmall
                description = 'We follow the latest trends in order to make your website stand out from your competition. Here is our most important values we follow when designing a website.'
                color = 'white' />

			<Columns
				data = { [
					{ name: 'Outstanding', description: "In order to help you surpass your competitors, we follow latest design trends to help you win potential customers by creating an outstanding website." }, 
					{ name: 'Minimalistic', description: 'We all know that less is more. We make sure that your website provides only important and valuable information to avoid looking cluttered.' }, 
					{ name: 'Elegant', description: "While keeping your website looking unique and minimalistic, we still add extra touches to make sure your website looks complete and polished." }] }
				color = 'white' />

            <StepLarge
                number = '02'
                name = 'Develop'
                color = '#F2F2F2' />

            <IntroSmall
                description = 'At letscomit we follow the best practises with a clean code approach when developing your website to avoid any bugs and errors.'
                color = '#F2F2F2' />
			
			<Columns
				data = { [
					{ name: 'Fast', description: 'It is not a secret that a website with slow load-time will dramatically decrease user experience. One of our biggest priorities is optimising the website to avoid this issue.' }, 
					{ name: 'Interactive', description: "While keeping the website fast is crucial, it won't perform at its best without any interactions. Our goal here is to develop a strong purpose and intuitive screen interface." }, 
					{ name: 'Responsive', description: 'People are browsing on all types of devices. Our mission is to deliver the best user experience no matter what device your website is being viewed on.' }] }
				color = '#F2F2F2' />
            
            <StepLarge
                number = '03'
                name = 'Deliver'
                color = 'white' />

            <IntroSmall
                description = "After having designed and developed the website, we won't just leave you to it. We will take publishing and hosting your website on us."
                color = 'white' />
			
			<Columns
				data = { [
					{ name: 'SEO optimised', description: 'In order to give you the best exposure we can, we will use specific keywords on your website to make it appear in the top of the search results.' }, 
					{ name: 'Secure', description: "To protect your website, we use the most secure and reliable hosting servers available. As a result, your website will be safe and stable on the web." },
					{ name: 'Social media', description: "We don't just build websites - we get your business name online. At letscomit we will also set up social media pages needed to maximise your results as a brand." }] }
				color = 'white' />

            <Discuss
                text = 'Ready to discuss your ideas?' />

    	</React.Fragment>
    );
}

export default services;
