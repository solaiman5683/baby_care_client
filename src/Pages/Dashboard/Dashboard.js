import React from 'react';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import AddProducts from './AddProducts';
import AllUsers from './AllUsers';
import DashboardHome from './DashboardHome';
import MyOrders from './MyOrders';

const Dashboard = () => {
	const { path, url } = useRouteMatch();
	return (
		<div>
			<div className='row'>
				<div className='col-md-2 vh-100 bg-info'>
					<NavLink
						exact
						className='btn btn-info w-100 shadow-0'
						activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
						to={`${url}`}>
						Dashboard
					</NavLink>

					<NavLink
						className='btn btn-info w-100 shadow-0'
						activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
						to={`${url}/myOrders`}>
						My Orders
					</NavLink>
					<NavLink
						className='btn btn-info w-100 shadow-0'
						activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
						to={`${url}/addProducts`}>
						Add Products
					</NavLink>
					<NavLink
						className='btn btn-info w-100 shadow-0'
						activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
						to={`${url}/allUsers`}>
						Make Admin
					</NavLink>
				</div>
				<div className='col-md-10'>
					<Switch>
						<Route exact path={path}>
							<DashboardHome />
						</Route>
						<Route exact path={`${path}/myOrders`}>
							<MyOrders />
						</Route>
						<Route exact path={`${path}/addProducts`}>
							<AddProducts />
						</Route>
						<Route exact path={`${path}/allUsers`}>
							<AllUsers />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
