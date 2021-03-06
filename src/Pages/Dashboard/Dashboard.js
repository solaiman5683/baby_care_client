import React from 'react';
import { NavLink, useRouteMatch, Switch } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import AdminRoute from '../PrivateRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddProducts from './AddProducts';
import AllUsers from './AllUsers';
import DashboardHome from './DashboardHome';
import ManageOrders from './ManageOrders';
import ManageProducts from './ManageProducts';
import MyOrders from './MyOrders';
import Payment from './Payment';
import Review from './Review';
import UpdateProduct from './UpdateProduct';

const Dashboard = () => {
	const { isAdmin } = useAuth();
	const { path, url } = useRouteMatch();
	return (
		<div>
			<div className='row'>
				<div className='col-md-2 h-full p-4 bg-info'>
					{!isAdmin ? (
						<>
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
								to={`${url}/review`}>
								Review
							</NavLink>
						</>
					) : (
						<>
							<NavLink
								className='btn btn-info w-100 shadow-0'
								activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
								to={`${url}/addProducts`}>
								Add Products
							</NavLink>
							<NavLink
								className='btn btn-info w-100 shadow-0'
								activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
								to={`${url}/manage-products`}>
								Manage Products
							</NavLink>
							<NavLink
								className='btn btn-info w-100 shadow-0'
								activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
								to={`${url}/manage-orders`}>
								Manage Orders
							</NavLink>
							<NavLink
								className='btn btn-info w-100 shadow-0'
								activeClassName='bg-primary text-light px-5 py-2 rounded-pill'
								to={`${url}/allUsers`}>
								Manage Users
							</NavLink>
						</>
					)}
				</div>
				<div className='col-md-10 p-5'>
					<Switch>
						<PrivateRoute exact path={path}>
							<DashboardHome />
						</PrivateRoute>
						<PrivateRoute exact path={`${path}/myOrders`}>
							<MyOrders />
						</PrivateRoute>
						<PrivateRoute exact path={`${path}/pay`}>
							<Payment />
						</PrivateRoute>
						<PrivateRoute exact path={`${path}/review`}>
							<Review />
						</PrivateRoute>
						<AdminRoute exact path={`${path}/addProducts`}>
							<AddProducts />
						</AdminRoute>
						<AdminRoute exact path={`${path}/manage-products`}>
							<ManageProducts />
						</AdminRoute>
						<AdminRoute exact path={`${path}/manage-orders`}>
							<ManageOrders />
						</AdminRoute>
						<AdminRoute exact path={`${path}/update-product/:id`}>
							<UpdateProduct />
						</AdminRoute>
						<AdminRoute exact path={`${path}/allUsers`}>
							<AllUsers />
						</AdminRoute>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
