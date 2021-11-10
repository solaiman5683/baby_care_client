import axios from 'axios';
import React from 'react';
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';

const AddProducts = () => {
	const handleSubmit = e => {
		e.preventDefault();
		const products = {
			name: e.target.productName.value,
			image: e.target.imageUrl.value,
			price: e.target.price.value,
			description: e.target.description.value,
		};
		axios
			.post('https://agile-beyond-99774.herokuapp.com/products', products)
			.then(response => {
				if (response.data) {
					alert('Product Successfully Added');
					e.target.reset();
				}
			});
	};
	return (
		<div>
			<Alert color='success' className='text-center fs-3'>
				Add Products
			</Alert>
			<div>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Input
							required
							id='exampleEmail'
							name='productName'
							placeholder='Enter Product Name'
							type='text'
							className='form-control p-3'
						/>
					</FormGroup>

					<FormGroup>
						<Input
							required
							id='exampleEmail'
							name='imageUrl'
							placeholder='Enter Image Url'
							type='text'
							className='form-control p-3'
						/>
					</FormGroup>
					<FormGroup>
						<Input
							required
							id='exampleEmail'
							name='price'
							placeholder='Enter Price'
							type='number'
							className='form-control p-3'
						/>
					</FormGroup>
					<FormGroup>
						<textarea
							required
							id='exampleEmail'
							name='description'
							placeholder='Enter Description'
							className='form-control p-3'
						/>
					</FormGroup>
					<Button className='form-control p-3 bg-primary'>Add Product</Button>
				</Form>
			</div>
		</div>
	);
};

export default AddProducts;
