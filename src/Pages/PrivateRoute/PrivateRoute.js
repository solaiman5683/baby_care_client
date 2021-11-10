import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = useAuth();
	if (loading) {
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
				user?.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
