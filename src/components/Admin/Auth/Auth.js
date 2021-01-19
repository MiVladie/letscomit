import React, { useState } from 'react';
import axios from 'axios';

import Form from '../../Form/Form';
import IntroLarge from '../../IntroLarge/IntroLarge';
import Spinner from '../../UI/Spinner/Spinner';

const Auth = ({ login }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const onLoginHandler = (values) => {
        setLoading(true);

        let url = 'https://access-server.herokuapp.com/admin/letscomit';
        let credentials = { credentials: values };

        axios.post(url, credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', response.data.expirationDate);
                
                setLoading(false);
                setError(null);
                
                login();
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
                let errorMessage = err.response.data.message;

                setError(errorMessage);
            });
    }

    return (
    	<React.Fragment>
            <IntroLarge
                main = 'Wow.. This page is restricted..' />

            { loading 
                ? <Spinner />
                : <Form 
                    data = {[
                        { 
                            title: 'email', 
                            fields: [
                                { name: 'email', type: 'email', placeholder: 'Enter email', required: true }] 
                        },
                        {
                            title: 'password', 
                            fields: [
                                { name: 'password', type: 'password', placeholder: 'Enter password', required: true }
                            ]
                        }]
                    }
                    submit = { { name: 'login', onSubmit: onLoginHandler } }
                    error = { error } />
            }
                
            <div style = {{ paddingTop: '5em' }} />
        </React.Fragment>
    );
}

export default Auth;
