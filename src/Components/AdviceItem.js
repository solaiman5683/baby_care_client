import React from 'react';
import { Link } from 'react-router-dom';

const AdviceItem = () => {
	return (
		<div class='col'>
			<div class='card h-100 border-0 text-center'>
				<img
					src='https://www.babycenter.com/ims/2020/06/iStock-613656404_wide.jpg.pagespeed.ce.hDzXx7LRjZ.jpg'
					class='card-img-top'
					alt='...'
				/>
				<div class='card-body'>
					<h5 class='card-title'>
						<Link className='text-dark text-decoration-none' to='/'>
							When should I stop giving my baby a bedtime bottle?
						</Link>
					</h5>
				</div>
			</div>
		</div>
	);
};

export default AdviceItem;
