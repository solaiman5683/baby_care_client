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
	return (
		<div className='pb-5'>
			<div className='row row-cols-1 row-cols-md-5 g-4'>
				{reviews?.map(review => (
					<div className='col'>
						<div className='card h-100 rounded py-4 border-0 text-center'>
							<p className='text-center'>
								<img
									src={review.image}
									className='card-img-top w-50 rounded-circle'
									alt=''
								/>
							</p>
							<div className='card-body'>
								<h4 className='card-title'>{review.name}</h4>
								<p className='card-text'>{review.feedback}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
