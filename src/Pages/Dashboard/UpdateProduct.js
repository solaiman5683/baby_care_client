import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';

const UpdateProduct = () => {
	const { id } = useParams();
	const history = useHistory();
	const [product, setProduct] = useState();
	const handleSubmit = e => {
		e.preventDefault();
		const productInfo = {
			name: e.target.productName.value,
			image: e.target.imageUrl.value,
			price: e.target.price.value,
			description: e.target.description.value,
		};
		axios
			.put(
				`https://agile-beyond-99774.herokuapp.com/products/${id}`,
				productInfo
			)
			.then(response => {
				if (response?.data) {
					alert('Product Successfully Updated');
					history.replace('/dashboard/manage-products');
				}
			})
			.catch(e => {
				console.log(e.message);
			});
	};
	useEffect(() => {
		axios(`https://agile-beyond-99774.herokuapp.com/products/${id}`).then(
			response => {
				setProduct(response?.data);
			}
		);
	}, [id]);
	return (
		<div>
			<Alert color='success' className='text-center fs-3'>
				Update Products
			</Alert>
			<div>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Input
							required
							id='exampleEmail'
							name='productName'
							defaultValue={product?.name}
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
							defaultValue={product?.image}
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
							defaultValue={product?.price}
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
							defaultValue={product?.description}
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

export default UpdateProduct;
