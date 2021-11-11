import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import {
	Form,
	FormGroup,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
	Button,
} from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const Purchase = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	useEffect(() => {
		axios(`https://agile-beyond-99774.herokuapp.com/products/${id}`).then(
			response => setProduct(response.data)
		);
	}, [id]);
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuth();
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		const orderInfo = {
			name: e.target.name.value,
			email: e.target.email.value,
			phone: e.target.phone.value,
			product: product?._id,
			quantity: e.target.quantity.value,
			paid: false,
			user: user.uid,
		};
		if (e.target.quantity.value < 1) {
			alert('Please select a quantity greater than or equal to 1');
			return;
		}
		axios
			.post('https://agile-beyond-99774.herokuapp.com/orders', orderInfo)
			.then(response => {
				if (response?.data) {
					alert('Your order has been received ');
					setIsOpen(false);
				}
			});
	};
	return (
		<div className='container my-5'>
			<div className='row'>
				<div className='col-md-6'>
					<img src={product?.image} alt={product?.name} width='100%' />
				</div>
				<div className='col-md-6 py-5'>
					<h2>{product?.name}</h2>
					<hr />
					<div className='row'>
						<div className='col-md-6'>
							<h4>Price: ৳{product?.price}</h4>
						</div>
						<div className='col-md-6' style={{ textAlign: 'right' }}>
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
										Order Now
									</ModalHeader>
									<ModalBody>
										<Form onSubmit={handleSubmit}>
											<FormGroup>
												<Input
													disabled
													defaultValue={product?.name}
													type='text'
													className='form-control p-3 text-center'
												/>
											</FormGroup>
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
					<hr />
					<p>{product?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
