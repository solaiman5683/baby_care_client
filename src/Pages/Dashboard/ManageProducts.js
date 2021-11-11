import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const ManageProducts = () => {
	const [products, setProducts] = useState();
	const { user } = useAuth();

	useEffect(() => {
		axios('https://agile-beyond-99774.herokuapp.com/products').then(response =>
			setProducts(response?.data)
		);
	}, [user]);
	const handleDelete = id => {
		const checked = window.confirm(
			'Are you sure you want to delete this user?'
		);
		if (checked) {
			axios
				.delete(`https://agile-beyond-99774.herokuapp.com/users/${id}`)
				.then(response => {
					if (response?.data.acknowledged) {
					}
				});
		}
	};
	return (
		<div>
			<Table hover responsive size='sm'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((pd, i) => (
						<tr key={i}>
							<th scope='row'>{i + 1}</th>
							<td>{pd.name}</td>
							<td>৳ {pd.price}</td>
							<td>
								<Link
									className='btn btn-primary mx-2'
									title='Update Product'
									to={`/dashboard/update-product/${pd._id}`}>
									<i className='fad fa-edit'></i>
								</Link>
								<button
									className='btn btn-danger'
									title='Delete'
									onClick={() => handleDelete(pd._id)}>
									<i className='fad fa-trash'></i>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ManageProducts;
