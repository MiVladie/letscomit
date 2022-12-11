import React, { useState } from 'react';

import { API_URL } from '../../../constants/config';

import Form from '../../Form/Form';
import IntroLarge from '../../IntroLarge/IntroLarge';
import Spinner from '../../UI/Spinner/Spinner';

import axios from 'axios';

const Auth = ({ login }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const onLoginHandler = async (values) => {
		setLoading(true);

		try {
			const { data } = await axios.post(API_URL + '/admin/letscomit', { credentials: values });

			localStorage.setItem('token', data.token);
			localStorage.setItem('expirationDate', data.expirationDate);

			setLoading(false);
			setError(null);

			login();
		} catch (error) {
			let errorMessage = error.response?.data?.message || 'Oops, something went wrong!';

			setError(errorMessage);
			setLoading(false);
		}
	};

	return (
		<React.Fragment>
			<IntroLarge main='Wow.. This page is restricted..' />

			{loading ? (
				<Spinner />
			) : (
				<Form
					data={[
						{
							title: 'email',
							fields: [{ name: 'email', type: 'email', placeholder: 'Enter email', required: true }]
						},
						{
							title: 'password',
							fields: [
								{ name: 'password', type: 'password', placeholder: 'Enter password', required: true }
							]
						}
					]}
					submit={{ name: 'login', onSubmit: onLoginHandler }}
					error={error}
				/>
			)}

			<div style={{ paddingTop: '5em' }} />
		</React.Fragment>
	);
};

export default Auth;
