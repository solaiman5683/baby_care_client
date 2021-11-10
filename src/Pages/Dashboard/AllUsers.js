import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const AllUsers = () => {
	const [users, setUsers] = useState();
	const { user, removeUser } = useAuth();

	useEffect(() => {
		axios('https://agile-beyond-99774.herokuapp.com/users').then(response =>
			setUsers(response.data)
		);
	}, [user]);
	const handleAdmin = email => {
		axios
			.put('https://agile-beyond-99774.herokuapp.com/users/admin', { email })
			.then(response => {
				if (response.data.acknowledged) {
					alert('User Updated Successfully');
				}
			});
	};
	const handleDelete = id => {
		const checked = window.confirm(
			'Are you sure you want to delete this user?'
		);
		if (checked) {
			axios
				.delete(`https://agile-beyond-99774.herokuapp.com/users/${id}`)
				.then(response => {
					console.log(response.data);
					if (response.data.acknowledged) {
						removeUser();
					}
				});
		}
	};
	console.log(users);
	return (
		<div>
			<Table hover responsive size='sm'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user, i) => (
						<tr key={i}>
							<th scope='row'>{i + 1}</th>
							<td>{user.displayName}</td>
							<td>{user.email}</td>
							<td>
								<button
									className='btn btn-primary mx-2'
									onClick={() => handleAdmin(user.email)}
									disabled={user.role === 'admin' ? true : false}>
									{user.role === 'admin' ? 'Admin' : 'Make Admin'}
								</button>
								<button
									className='btn btn-danger'
									title='Delete User'
									onClick={() => handleDelete(user._id)}>
									<i className='fad fa-user-slash'></i>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default AllUsers;
