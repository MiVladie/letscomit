import React, { useState, useEffect } from 'react';

import Auth from '../../components/Admin/Auth/Auth';
import Inbox from '../../components/Admin/Inbox/Inbox';

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        checkingLogin();
    });
  
    const checkingLogin = () => {        
        let token = localStorage.getItem('token');
        let expirationDate = localStorage.getItem('expirationDate');

        if(!token || !expirationDate) {
            return setLoggedIn(false);
        }

        if(expirationDate < new Date()) {
            return setLoggedIn(false);
        }

        if(!loggedIn) {
            console.log('yay!')
            return setLoggedIn(true);
        }
    }
    
    return (
        <React.Fragment>
            <div style = {{ paddingTop: '5em' }} />
            { loggedIn ? <Inbox /> : <Auth login = { checkingLogin } /> }
            <div style = {{ paddingBottom: '2em' }} />
        </React.Fragment>
    );}

export default Admin;
