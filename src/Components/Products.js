import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Button,
	Form,
	FormGroup,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { useAuth } from '../Contexts/AuthContext';

const Products = ({ product }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuth();
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		const orderInfo = {
			name: e.target.name.value,
			email: e.target.email.value,
			phone: e.target.phone.value,
			product: product._id,
			quantity: e.target.quantity.value,
			paid: false,
			user: user.uid,
		};
		console.log(orderInfo);
		axios
			.post('https://agile-beyond-99774.herokuapp.com/orders', orderInfo)
			.then(response => {
				if (response.data) {
					alert('Your order has been received ');
					setIsOpen(false);
				}
			});
	};
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
					<div className='ms-auto my-2  p-2'>
						<Button
							className='bg-warning text-dark border-0  text-decoration-none shadow px-4 rounded-pill'
							onClick={() => {
								if (user?.email) {
									setIsOpen(prev => !prev);
								} else {
									alert('Please Login First');
									history.replace('/login');
								}
							}}>
							Buy Now
						</Button>
						<div>
							<Modal
								centered
								fullscreen='sm'
								scrollable
								size=''
								isOpen={isOpen}
								toggle={() => {
									setIsOpen(prev => !prev);
								}}>
								<ModalHeader
									toggle={() => {
										setIsOpen(prev => !prev);
									}}>
									{product.name}
								</ModalHeader>
								<ModalBody>
									<Form onSubmit={handleSubmit}>
										<FormGroup>
											<Input
												required
												id='exampleName'
												name='name'
												defaultValue={user?.displayName}
												placeholder='Enter Your Name'
												type='text'
												className='form-control p-3'
											/>
										</FormGroup>

										<FormGroup>
											<Input
												required
												id='exampleEmail'
												name='email'
												defaultValue={user?.email}
												placeholder='Enter Email Address'
												type='email'
												className='form-control p-3'
											/>
										</FormGroup>
										<FormGroup>
											<Input
												required
												id='examplePhone'
												name='phone'
												placeholder='Enter Phone Number'
												type='text'
												className='form-control p-3'
											/>
										</FormGroup>
										<FormGroup>
											<Input
												required
												id='exampleQuantity'
												name='quantity'
												placeholder='Enter Quantity'
												type='number'
												defaultValue={1}
												className='form-control p-3'
											/>
										</FormGroup>
										<Button className='form-control p-3 bg-primary'>
											Place Order
										</Button>
									</Form>
								</ModalBody>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
