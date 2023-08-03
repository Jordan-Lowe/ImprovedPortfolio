import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./ReactLogo";
import React from "react";
import styled from "styled-components";

const WebDesDescription = styled.p`
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

const WebDesign = () => {
	return (
		<>
			<Canvas >
				<Stage environment={"city"} intensity={0.6}>
					<ReactLogo />
				</Stage>
				<OrbitControls
					enableZoom={false}
					autoRotate={true}
					autoRotateSpeed={4}
				/>
			</Canvas>
			<WebDesDescription>I have extensive experience</WebDesDescription>
		</>
	);
};

export default WebDesign;
