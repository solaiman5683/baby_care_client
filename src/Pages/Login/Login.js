import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useAuth } from '../../Contexts/AuthContext';

const Login = () => {
	const { googleLogin, login } = useAuth();
	const handleSubmit = e => {
		e.preventDefault();
		login(e.target.email.value, e.target.password.value);
	};

	return (
		<div className='d-flex p-5 m-md-5 justify-content-center align-items-center'>
			<div className='shadow p-5 rounded'>
				<Form onSubmit={handleSubmit}>
					<h2 className='text-center pb-2 mb-4 border-bottom'>Login</h2>
					<FormGroup>
						<Label for='exampleEmail'>Email</Label>
						<Input
							id='exampleEmail'
							name='email'
							placeholder='Enter Your Email'
							type='email'
							style={{
								minWidth: '350px',
							}}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='examplePassword'>Password</Label>
						<Input
							id='examplePassword'
							name='password'
							placeholder='Enter Your Password'
							type='password'
						/>
					</FormGroup>
					<Button>Login</Button>
				</Form>
				<hr />
				<p className='text-center '>
					<button className='btn shadow-sm rounded-pill' onClick={googleLogin}>
						Continue with Google
					</button>
				</p>
				<p className='text-center '>
					<Link to='/signup' className='btn'>
						Need an Account ?
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
