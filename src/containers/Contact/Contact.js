import React, { useState } from 'react';

import { API_URL } from '../../constants/config';

import Banner from '../Banner/Banner';
import Form from '../../components/Form/Form';
import Intro from '../../components/Intro/Intro';
import IntroLarge from '../../components/IntroLarge/IntroLarge';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from 'axios';

const Contact = () => {
	const [loading, setLoading] = useState(false);

	const onSubmitHandler = async (values) => {
		setLoading(true);

		let message = { message: values };

		values.time =
			new Date().getDate() +
			'/' +
			(new Date().getMonth() + 1) +
			'/' +
			new Date().getFullYear() +
			' ' +
			new Date().getHours() +
			':' +
			new Date().getMinutes();

		try {
			await axios.post(API_URL + '/message/letscomit/', message);

			window.location.replace(process.env.PUBLIC_URL);

			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<React.Fragment>
			<Banner link='contact' scrollTo='welcome' />

			<IntroLarge main="Let's get to the next level together" />

			{loading ? (
				<Spinner />
			) : (
				<Form
					data={[
						{
							title: 'about you',
							fields: [
								{ name: 'firstName', type: 'text', placeholder: 'First name', required: true },
								{ name: 'lastName', type: 'text', placeholder: 'Last name', required: false },
								{ name: 'companyName', type: 'text', placeholder: 'Company name', required: false }
							]
						},
						{
							title: 'contact info',
							fields: [
								{ name: 'email', type: 'email', placeholder: 'Email address', required: true },
								{ name: 'phone', type: 'tel', placeholder: 'Phone number', required: false }
							]
						},
						{
							title: 'message',
							fields: [
								{ name: 'message', type: 'textarea', placeholder: 'Your message...', required: true }
							]
						}
					]}
					submit={{ name: 'send', onSubmit: onSubmitHandler }}
				/>
			)}

			<Intro main='prefer email or phone?' description={'letscomit@gmail.com | +44 73422 16193'} />
		</React.Fragment>
	);
};

export default Contact;
