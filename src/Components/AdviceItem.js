import React from 'react';
import { Link } from 'react-router-dom';

const AdviceItem = () => {
	return (
		<div className='col'>
			<div className='card h-100 border-0 text-center'>
				<img
					src='https://www.babycenter.com/ims/2020/06/iStock-613656404_wide.jpg.pagespeed.ce.hDzXx7LRjZ.jpg'
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>
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
