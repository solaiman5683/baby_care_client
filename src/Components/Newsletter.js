import React from 'react';

const Newsletter = () => {
	return (
		<div className='container rounded-pill bg-warning p-5 my-4'>
			<div className='row justify-content-center align-items-center '>
				<div className='col-md-6 text-center'>
					<h3 className=' fw-bold'>Newsletter</h3>
					<p>Remember to stay in touch to get Season's offers and discounts!</p>
				</div>
				<form
					className='col-md-6 d-flex p-0 rounded-pill bg-light'
					onSubmit={e => e.preventDefault()}>
					<input
						type='text'
						className='form-control p-3 border-0 shadow-0 bg-transparent '
						placeholder='Email Address'
					/>
					<input
						type='submit'
						className='btn btn-primary ms-2 rounded-pill px-4'
						value='Subscribe'
					/>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
