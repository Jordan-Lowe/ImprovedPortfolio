import React from "react";
import styled from "styled-components";
import NavBarLinks from "./NavBarLinks";
<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap');
</style>;

const NavBarSection = styled.div`
	display: flex;
	justify-content: center;
	width: 95%;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

const NavBarContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 10px 0px;

	@media only screen and (max-width: 768px) {
		width: 100%;
		padding: 10px;
	}
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;
`;

const NavLogo = styled.img`
	padding: 5%;
	height: 20vh;
	width: 12vw;
	filter: invert(100%);
	z-index: 1;
`;

const NavUl = styled.ul`
	display: flex;
	gap: 10px;
	list-style: none;
	font-weight: 400;
	font-family: "Lato", sans-serif;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const NavList = styled.li`
	cursor: pointer;
	padding: 18px;
	margin-left: 0.8vw;
	font-size: 2.5vh;
	padding-top: 4%;
	transition-property: transform;
	transition-duration: 300ms;
	transition-timing-function: ease-in-out;

	&:hover {
		transform: scale(1.25);
	}
`;

function NavBar() {
	return (
		<NavBarSection>
			<NavBarContainer>
				<NavLinks>
					<div>
						<NavLogo src="../Images/jordan-lowe-logo.png" alt="Logo_Img" />
					</div>
					<NavUl>
						<NavList>Home</NavList>
						<NavList>Who</NavList>
						<NavList>Works</NavList>
						<NavList>Contact Me</NavList>
						<NavBarLinks />
					</NavUl>
				</NavLinks>
			</NavBarContainer>
		</NavBarSection>
	);
}

export default NavBar;
