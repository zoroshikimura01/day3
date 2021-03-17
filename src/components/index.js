import React from 'react'; 
import { 
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink, 
} from './NavbarElement.styles'; 

const Navbar = () => { 
return ( 
	<> 
	<Nav> 
		<Bars /> 
		<NavMenu> 
		<NavLink to='/' activeStyle> 
			HOME 
		</NavLink> 
		<NavLink to='/about' activeStyle> 
			ABOUT 
		</NavLink> 
		<NavLink to='/events' activeStyle> 
			EVENT 
		</NavLink> 
		<NavLink to='/annual' activeStyle> 
			ANNUAL REPORT
		</NavLink> 
		<NavLink to='/team' activeStyle> 
			TEAM 
		</NavLink> 
		<NavLink to='/blogs' activeStyle> 
			BLOGS 
		</NavLink> 
		<NavLink to='/sign-up' activeStyle> 
			SIGN UP
		</NavLink> 
		</NavMenu> 
		<NavBtn> 
		<NavBtnLink to='/signin'>SIGN IN</NavBtnLink> 
		</NavBtn> 
	</Nav> 
	</> 
); 
}; 

export default Navbar;
