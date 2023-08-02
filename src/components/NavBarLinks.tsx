import React from "react";
import styled from "styled-components";

const CV_Logo = "../../public/Images/curriculum-vitae-resume-svgrepo-com.svg";
const GITHUB_LOGO = "../../public/Images/github-mark-white.svg";
const Linkdein_Logo = "../../public/Images/linkedin-icon-2.svg";

const NavBarImg = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const NavImgList = styled.li`
	padding: 20px;
	display: flex;
	justify-content: space-evenly;
	margin-left: 1vw;
	transition-property: transform;
	transition-duration: 300ms;
	transition-timing-function: ease-in-out;

	&:hover {
		transform: scale(1.5);
	}
`;

const NavImages = styled.img`
	height: 6vh;
	width: 4vw;
`;

const GithubLogo = styled(NavImages)`
	width: 3vw;
`;

function NavBarLinks() {
	return (
		<NavBarImg>
			<NavImgList>
				<a
					href="https://github.com/Jordan-Lowe"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubLogo src={GITHUB_LOGO} alt="Github logo" />
				</a>
			</NavImgList>
			<NavImgList>
				<a
					href="https://www.linkedin.com/in/jordanlowe5/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NavImages src={Linkdein_Logo} alt="Linkedin logo" />
				</a>
			</NavImgList>

			<NavImgList>
				<a
					href="../../public/Pdf/Jordan Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NavImages src={CV_Logo} alt="CV logo" />
				</a>
			</NavImgList>
		</NavBarImg>
	);
}

export default NavBarLinks;
