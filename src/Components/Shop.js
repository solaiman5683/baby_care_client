import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Products from './Products';

const Shop = ({ limit }) => {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios(
			`https://agile-beyond-99774.herokuapp.com/products?${
				limit && `limit=${limit}`
			}`
		).then(response => setProducts(response?.data));
	}, [limit]);
	return (
		<div className='py-5 container'>
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
