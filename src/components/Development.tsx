import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SciFiCom from "./SciFiCom";

const Development = () => {
	return (
		<>
			<Canvas>
				<Stage environment={"city"} intensity={0.4}>
					<SciFiCom />
				</Stage>
				<OrbitControls enableZoom={false} />
			</Canvas>
		</>
	);
};
export default Development;
