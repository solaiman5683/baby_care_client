import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
	return (
		<div className='col'>
			<div
				className='card h-100 border-0 shadow overflow-hidden'
				style={{ borderRadius: '20px' }}>
				<Link
					className='text-dark text-decoration-none'
					to={`/products/${product._id}`}>
					<img src={product.image} className='card-img-top' alt='...' />
				</Link>

				<div className='card-body'>
					<h5 className='card-title'>
						<Link className='text-dark text-decoration-none' to='/'>
							{product.name}
						</Link>
					</h5>
				</div>
				<div className='card-footer d-flex'>
					<p className='my-2 mb-0 p-2'>Price: ৳{product.price}</p>
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
