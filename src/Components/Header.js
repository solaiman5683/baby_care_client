import React from 'react';

const Header = () => {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, rgba(0, 0, 0, 0.83), rgba(0, 30, 0, 0.73)), url('https://monnampo.sirv.com/Images/Assignment12/pexels-pixabay-51953.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '500px',
			}}
			className='d-flex justify-content-center align-items-center text-light'>
			<div className='text-center'>
				<h1>We are here for your baby's amazing development </h1>
				<p className='py-5'>
					<button className='btn btn-primary px-5'>Explore now {' >>'}</button>
				</p>
			</div>
		</div>
	);
};

export default Header;
