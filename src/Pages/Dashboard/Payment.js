import React from 'react';
import { Alert } from 'reactstrap';

const Payment = () => {
	return (
		<div>
			<Alert color='warning'>
				<h2>Oops! Payment method not available right now.</h2>
				<p>
					We are currently working on a new payment method. It will be here in
					the next few days.
				</p>
			</Alert>
		</div>
	);
};

export default Payment;
