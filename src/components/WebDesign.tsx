import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./ReactLogo";
import React from "react";


const WebDesign = () => {
	return (
		<>
			<Canvas>
				<Stage environment={"night"} intensity={0.2}>
					<ReactLogo />
				</Stage>
				<OrbitControls
					enableZoom={false}
					autoRotate={true}
					autoRotateSpeed={4}
				/>
			</Canvas>
		</>
	);
};

export default WebDesign;

