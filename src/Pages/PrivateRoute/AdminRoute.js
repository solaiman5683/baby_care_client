import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const AdminRoute = ({ children, ...rest }) => {
	const { user, isAdmin, loading } = useAuth();
	if (loading && isAdmin) {
		return (
			<div className='vh-100 d-flex justify-content-center align-items-center'>
				<Spinner
					className='fs-4'
					style={{
						width: '5em',
						height: '5em',
					}}>
					Loading...
				</Spinner>
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email && isAdmin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/dashboard',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
