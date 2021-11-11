import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const ManageProducts = () => {
	const [orders, setOrders] = useState();
	const [products, setProducts] = useState();
	const { user } = useAuth();

	useEffect(() => {
		axios('https://agile-beyond-99774.herokuapp.com/products').then(response =>
			setProducts(response?.data)
		);
		axios(`https://agile-beyond-99774.herokuapp.com/orders/${user.uid}`).then(
			response => setOrders(response?.data)
		);
	}, [user]);

	const handleDelete = id => {
		const checked = window.confirm(
			'Are you sure you want to delete this user?'
		);
		if (checked) {
			axios
				.delete(`https://agile-beyond-99774.herokuapp.com/orders/${id}`)
				.then(response => {
					if (response?.data.acknowledged) {
						alert('Item Deleted Success');
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
						<th>Quantity</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order, i) => {
						const pd = products?.find(product => product._id === order.product);
						return (
							<tr key={i}>
								<th scope='row'>{i + 1}</th>
								<td>{pd?.name}</td>
								<td>৳ {pd?.price}</td>
								<td>{order.quantity}</td>
								<td>
									{order.paid ? (
										'Waiting For Delivery'
									) : (
										<Link className='btn btn-warning' to='/dashboard/pay'>
											Pay Now
										</Link>
									)}
								</td>
								<td>
									<button
										className='btn btn-danger'
										title='Cancel orders'
										onClick={() => handleDelete(order._id)}>
										<i className='fad fa-trash'></i>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ManageProducts;
