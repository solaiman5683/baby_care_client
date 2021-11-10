import React from 'react';
import Advertise from '../../Components/Advertise';
import Advice from '../../Components/Advice';
import Header from '../../Components/Header';
import Newsletter from '../../Components/Newsletter';
import Shop from '../../Components/Shop';

const Home = () => {
	return (
		<div>
			<Header />
			<Advice />
			<Advertise />
			<Shop />
			<Newsletter />
		</div>
	);
};

export default Home;
