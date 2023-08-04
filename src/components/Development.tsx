import React from "react";
import styled from "styled-components";

const DevDescription = styled.p`
	width: 4vw;
	height: 70px;
	padding: 20px;
	background-color: #fff;
	color: black;
	border-radius: 5px;
	top: 50%;
	left: 90%;
	position: absolute;
	font-size: 20px;
	font-weight: 300;

	@media only screen and (max-width: 768px) {
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
	}
`;

const Development = () => {
	return (
		<>
			<DevDescription>Hi</DevDescription>
		</>
	);
};
export default Development;
