import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<div class='col'>
			<div
				class='card h-100 border-0 shadow overflow-hidden'
				style={{ borderRadius: '20px' }}>
				<img
					src='https://m.media-amazon.com/images/I/61AFLagz9XL._SX466_.jpg'
					class='card-img-top'
					alt='...'
				/>
				<div class='card-body'>
					<h5 class='card-title'>
						<Link className='text-dark text-decoration-none' to='/'>
							Cetaphil Baby Wash & Shampoo with Organic Calendula
						</Link>
					</h5>
				</div>
				<div class='card-footer d-flex'>
					<p className='my-2 mb-0 p-2'>Price: $50</p>
					<p className='ms-auto my-2  p-2'>
						<Link
							to='/'
							className='text-dark  text-decoration-none shadow p-3 m-2 px-4 rounded-pill'>
							Buy Now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Products;
