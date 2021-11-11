import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

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
						<Link
							className='text-dark text-decoration-none'
							to={`/products/${product._id}`}>
							{product.name}
						</Link>
					</h5>
					<p className='text-muted'>{product.description.slice(0, 200)} ...</p>
				</div>
				<div className='card-footer d-flex'>
					<p className='my-2 mb-0 p-2'>Price: ৳{product.price}</p>
					<div className='ms-auto my-2  p-2'>
						<Link to={`/products/${product._id}`}>
							<Button className='bg-warning text-dark border-0  text-decoration-none shadow px-4 rounded-pill'>
								Purchase
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
