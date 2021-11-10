import React from 'react';
import Products from './Products';

const Shop = () => {
	return (
		<div className='pb-5 container'>
			<h1 className='text-center'>Our Latest Baby Care Products</h1>
			<hr />
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4'>
				<Products />
				<Products />
				<Products />
				<Products />
			</div>
		</div>
	);
};

export default Shop;
