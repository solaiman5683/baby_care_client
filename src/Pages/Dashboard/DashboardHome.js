import React from 'react';
import { useAuth } from '../../Contexts/AuthContext';

const DashboardHome = () => {
	const { user } = useAuth();
	return (
		<div>
			<img src={user?.photoUrl} alt='' />
			<h1 className='text-center'>Welcome, {user?.displayName}</h1>
		</div>
	);
};

export default DashboardHome;
