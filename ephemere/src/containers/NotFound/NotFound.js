import React from 'react';

import Intro from '../../components/Intro/Intro';

const notFound = () => {
    return (
    	<React.Fragment>   
            <div style = {{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
                <Intro 
                    main = "404! Page not found!"
                    description = "The page you are looking for does not exist or an other error occured! Go back, or head over to letscomit.com to choose a new direction." />
            </div>

    	</React.Fragment>
    );
}

export default notFound;
