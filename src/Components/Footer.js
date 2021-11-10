import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const Footer = () => {
	const { user, logout } = useAuth();
	return (
		<div className='bg-dark pt-5 pb-3 text-light'>
			<div className='container '>
				<div className='row'>
					<div className='col-md-3 text-center '>
						<img
							src='https://monnampo.sirv.com/Images/Assignment12/logoBaby.svg'
							alt=''
							width='100px'
						/>
						<h3>Baby Center</h3>
					</div>
					<div className='col-md-3'></div>
					<div className='col-md-3'>
						<h4>My Account</h4>

						<p>
							<Link to='/dashboard' className='text-light text-muted'>
								{'>'} Dashboard
							</Link>
						</p>
						<p>
							<Link to='/dashboard/myOrders' className='text-light text-muted'>
								{'>'} My Orders
							</Link>
						</p>
						{user?.displayName || user?.email ? (
							<p className='text-light text-muted pointer' onClick={logout}>
								{'> '}Logout
							</p>
						) : (
							<>
								<p>
									<Link to='/login' className='text-light text-muted'>
										{'>'} Login
									</Link>
								</p>
								<p>
									<Link to='/signup' className='text-light text-muted'>
										{'>'} Register
									</Link>
								</p>
							</>
						)}
					</div>
					<div className='col-md-3'>
						<h4>Important Links</h4>
						<p>
							<Link className='text-light text-muted'>{'>'} About Us</Link>
						</p>
						<p>
							<Link className='text-light text-muted'>{'>'} Contact Us</Link>
						</p>
						<p>
							<Link className='text-light text-muted'>
								{'>'} Terms and Conditions
							</Link>
						</p>
					</div>
				</div>
				<hr />
				<div className='row'>
					<div className='col-md-6'>
						<p className='text-muted'>Copyright &copy;2021 BabyCenter.</p>
					</div>
					<div className='col-md-6 d-flex justify-content-end'>
						<a href='http://www.facebook.com' className='text-muted p-2 m-0'>
							<i className='fab fa-facebook-square'></i>
						</a>
						<a href='http://www.facebook.com' className='text-muted p-2 m-0'>
							<i className='fab fa-twitter'></i>
						</a>
						<a
							href='mailto:solaiman.sh6@gmail.com'
							className='text-muted p-2 m-0'>
							<i className='fad fa-envelope-open-text'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
