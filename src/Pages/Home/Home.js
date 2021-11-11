import React from 'react';
import { Link } from 'react-router-dom';
import Advertise from '../../Components/Advertise';
import Advice from '../../Components/Advice';
import Header from '../../Components/Header';
import Newsletter from '../../Components/Newsletter';
import Reviews from '../../Components/Reviews';
import Shop from '../../Components/Shop';

const Home = () => {
	return (
		<div>
			<Header />
			<Advice />
			<Advertise />
			<Shop limit={6} />
			<p className='text-center mb-5'>
				<Link
					to='/shop'
					className='btn btn-primary fs-5 px-5 py-3 rounded-pill'>
					Explore more Products{' >>'}
				</Link>
			</p>
			<div className='container'>
				<h2 className='text-center'>Our Customer Reviews</h2>
				<hr />
				<Reviews />
			</div>
			<Newsletter />
		</div>
	);
};

export default Home;
