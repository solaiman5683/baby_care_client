import React from 'react';

const Header = () => {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.53)), url('https://monnampo.sirv.com/Images/Assignment12/young-black-mom-holding-baby-toddler-posing-standing-indoors-panorama-e1634109712883.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '600px',
			}}
			className='d-flex justify-content-center align-items-center text-light'>
			<div className='text-center'>
				<h1>How to Take Care of Newborn Baby</h1>
				<p>We are here for your baby's amazing development </p>
				<p className='py-3'>
					<button className='btn btn-primary px-5'>Explore now {' >>'}</button>
				</p>
			</div>
		</div>
	);
};

export default Header;
