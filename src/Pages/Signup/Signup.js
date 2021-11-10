import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const Signup = () => {
	const { googleLogin, register, error } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const handleSubmit = e => {
		e.preventDefault();
		register(
			e.target.fullName.value,
			e.target.email.value,
			e.target.password.value,
			history,
			location
		);
		e.target.reset();
	};

	return (
		<div className='d-flex p-5 justify-content-center align-items-center'>
			<div>
				<div className='shadow p-5 mb-4 rounded'>
					<Form onSubmit={handleSubmit}>
						<h2 className='text-center pb-2 mb-4 border-bottom'>
							Registration
						</h2>
						<FormGroup>
							<Label for='exampleName'>Name</Label>
							<Input
								required
								id='exampleEmail'
								name='fullName'
								placeholder='Enter Your Full Name'
								type='text'
								style={{
									minWidth: '350px',
								}}
							/>
						</FormGroup>
						<FormGroup>
							<Label for='exampleEmail'>Email</Label>
							<Input
								required
								id='exampleEmail'
								name='email'
								placeholder='Enter Your Email'
								type='email'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Password</Label>
							<Input
								required
								id='examplePassword'
								name='password'
								placeholder='Enter Your Password'
								type='password'
							/>
						</FormGroup>
						<Button>Register</Button>
					</Form>
					<hr />
					<p className='text-center '>
						<button
							className='btn shadow-sm rounded-pill'
							onClick={() => googleLogin(history, location)}>
							Continue with Google
						</button>
					</p>
					<p className='text-center '>
						<Link to='/login' className='btn'>
							Already registered ?
						</Link>
					</p>
				</div>
				{error && <Alert color='danger'>{error}</Alert>}
			</div>
		</div>
	);
};

export default Signup;
