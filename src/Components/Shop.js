import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Products from './Products';

const Shop = () => {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios('https://agile-beyond-99774.herokuapp.com/products?limit=6').then(
			response => setProducts(response.data)
		);
	}, []);
	return (
		<div className='pb-5 container'>
			<h1 className='text-center'>Our Latest Baby Care Products</h1>
			<hr />
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4'>
				{products?.map(product => (
					<Products key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
