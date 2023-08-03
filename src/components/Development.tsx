import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SciFiCom from "./SciFiCom";
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
			<Canvas>
				<Stage environment={"park"} intensity={0.4}>
					<SciFiCom />
				</Stage>
				<OrbitControls enableZoom={false} />
			</Canvas>
			<DevDescription>Hi</DevDescription>
		</>
	);
};
export default Development;
