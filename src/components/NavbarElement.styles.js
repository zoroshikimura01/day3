import { NavLink as Link } from 'react-router-dom'; 
import styled from 'styled-components'; 

export const Nav = styled.nav` 
background: #2F4F4F; 
height: 45px; 
display: flex; 
justify-content: space-between; 
padding: 0.2rem calc((100vw - 1000px) / 1.5); 
z-index: 12; 
`; 

export const NavLink = styled(Link)` 
color: #FFFFF0; 
display: flex; 
align-items: center; 
text-decoration: none; 
padding: 0 1rem; 
height: 100%; 
cursor: pointer; 
&.active { 
	color: black; 
}
&:hover { 
	transition: all 0.2s ease-in-out; 
	background-color: #555;
  	color: white;
}  
`; 

export const Bars = styled.div` 
display: none; 
color: #808080; 
@media screen and (max-width: 768px) { 
	display: block; 
	position: absolute; 
	top: 0; 
	right: 0; 
	transform: translate(-100%, 75%); 
	font-size: 1.8rem; 
	cursor: pointer; 
} 
`; 

export const NavMenu = styled.div` 
display: flex; 
align-items: center; 
margin-right: -24px; 
@media screen and (max-width: 768px) { 
	display: none; 
} 
`; 


export const NavBtnLink = styled(Link)` 
border-radius: 4px; 
background: #808080; 
padding: 10px 22px; 
color: #000000; 
outline: none; 
border: none; 
cursor: pointer; 
transition: all 0.2s ease-in-out; 
text-decoration: none; 
margin-left: 24px; 
&:hover { 
	transition: all 0.2s ease-in-out; 
	background: #fff; 
	color: #808080; 
} 
`;

export const NavBtn = styled.nav` 
  display: flex; 
  align-items: center; 
  margin-right: 24px; 
  /* Third Nav */
  /* justify-content: flex-end; 
  width: 100vw; */
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`; 
  