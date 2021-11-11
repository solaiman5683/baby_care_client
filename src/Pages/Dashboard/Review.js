import axios from 'axios';
import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const Review = () => {
	const { user } = useAuth();
	const handleSubmit = e => {
		e.preventDefault();
		const review = {
			name: user.displayName,
			image: user?.photoURL,
			feedback: e.target.feedback.value,
		};
		axios
			.post('https://agile-beyond-99774.herokuapp.com/reviews', review)
			.then(res => {
				if (res.data) {
					alert('Thanks For Your Feedback.');
				}
			});
	};
	return (
		<div>
			<h2 className='py-3'>Give your feedback here</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<textarea
						required
						id='exampleEmail'
						name='feedback'
						placeholder='Write Your Feedback'
						className='form-control p-3 fs-5'
					/>
				</FormGroup>
				<Button className='form-control p-3 bg-primary'>Add Product</Button>
			</Form>
		</div>
	);
};

export default Review;
