import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
	const [reviews, setReviews] = useState();
	useEffect(() => {
		axios('https://agile-beyond-99774.herokuapp.com/reviews')
			.then(response => {
				setReviews(response?.data);
			})
			.catch(error => {
				alert(error.message);
			});
	}, []);
	console.log(reviews);
	return <div></div>;
};

export default Reviews;
