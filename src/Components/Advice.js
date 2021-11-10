import React from 'react';
import AdviceItem from './AdviceItem';

const Advice = () => {
	return (
		<div className='py-4 container'>
			<h2 className='py-4 text-center'>Get expert advice and answers </h2>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
				<AdviceItem />
				<AdviceItem />
				<AdviceItem />
				<AdviceItem />
			</div>
		</div>
	);
};

export default Advice;
