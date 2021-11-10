import React from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {
	return (
		<div className='my-5 '>
			<img
				src='https://monnampo.sirv.com/Images/Assignment12/Bcare-bg-S6JFNQ.jpg'
				alt=''
				width='100%'
			/>
			<div className='container'>
				<div style={{ marginTop: '-60%' }} className='row align-items-center'>
					<div className='col-md-6'>
						<img
							src='https://monnampo.sirv.com/Images/Assignment12/Screenshot%202021-11-10%20at%2012-50-44%20Bcare%20%E2%80%93%20Baby%20Care%20Services%20Elementor%20Template%20Kit%20Preview%20-%20ThemeForest.png'
							width='100%'
							alt=''
						/>
					</div>
					<div className='col-md-6'>
						<h2>We Are The Best Baby Care In Town</h2>
						<p className='w-75 pb-5'>
							We offer high quality care products for your baby, we are the best
							child care provider in town, all our products are of international
							standard.
						</p>
						<Link class='btn btn-primary' to='/'>
							Visit Our Shop Now {' >>'}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advertise;
