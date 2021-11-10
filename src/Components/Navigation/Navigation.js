import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	UncontrolledDropdown,
} from 'reactstrap';

const Navigation = () => {
	return (
		<div>
			<Navbar color='info' container='md' dark expand='md' fixed=''>
				<NavbarBrand>
					<NavLink to='/'>
						<img
							src='https://monnampo.sirv.com/Images/Assignment12/logoBaby.svg'
							alt=''
							width='50px'
						/>
					</NavLink>
				</NavbarBrand>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav className='ms-auto' navbar>
						<NavItem>
							<NavLink activeClassName='active' className='nav-link' to='/'>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink activeClassName='active' className='nav-link' to='/'>
								Demo
							</NavLink>
						</NavItem>
						<UncontrolledDropdown inNavbar nav>
							<DropdownToggle nav>Options</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
