import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import "../../public/styling/test.css";
import Cube from "./Cube";

const Test = () => {
	<div className="testSection">
		<Canvas>
			<OrbitControls enableZoom={false} />
			<ambientLight intensity={1} />
			<directionalLight position={[3, 2, 1]} />
			<Cube />
		</Canvas>
	</div>;
};

export default Test;
