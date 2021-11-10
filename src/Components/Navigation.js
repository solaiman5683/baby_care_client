import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarToggler,
	NavItem,
	UncontrolledDropdown,
} from 'reactstrap';
import { useAuth } from '../Contexts/AuthContext';

const Navigation = () => {
	const { user, logout } = useAuth();
	return (
		<div>
			<Navbar color='light' container='sm' expand='md' light>
				<NavLink className='navbar-brand' to='/'>
					<img
						src='https://monnampo.sirv.com/Images/Assignment12/logoBaby.svg'
						alt=''
						width='50px'
					/>
				</NavLink>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav className='me-auto' navbar>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/'>
								Explore
							</NavLink>
						</NavItem>
					</Nav>
					<Nav className='ms-auto' navbar>
						{user?.displayName || user?.email ? (
							<UncontrolledDropdown inNavbar nav>
								<DropdownToggle nav>{user?.displayName}</DropdownToggle>
								<DropdownMenu
									end
									className='border-0 shadow py-0 rounded overflow-hidden text-center'>
									<DropdownItem>
										<Link className='text-dark' to='/dashboard'>
											Dashboard
										</Link>
									</DropdownItem>
									<DropdownItem>
										<Link className='text-dark' to='/dashboard'>
											My Orders
										</Link>
									</DropdownItem>
									<DropdownItem
										className='text-center mt-2 mb-0 bg-danger text-light'
										onClick={logout}>
										Logout
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						) : (
							<>
								<NavItem>
									<NavLink className='nav-link' to='/login'>
										Login
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/signup'>
										Signup
									</NavLink>
								</NavItem>
							</>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
