import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import UTypescriptLogo from "./UTypescriptLogo";

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
			<Canvas>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<Stage environment={"sunset"} intensity={0.2}>
					<UTypescriptLogo />
				</Stage>
				<OrbitControls
					enableZoom={false}
					autoRotate={false}
					autoRotateSpeed={4}
				/>
			</Canvas>
			<DevDescription>Hi</DevDescription>
		</>
	);
};
export default Development;
