import React, { useRef } from "react";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

const CubeFace = ({ position, rotation, text }) => {
	const textRef = useRef(null);
	useFrame((state) => {
		if (textRef.current) {
			textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.4;
		}
	});
	return (
		<mesh position={position} rotation={rotation}>
			<planeGeometry attach="geometry" args={[1.5, 1.5]} />
			<meshStandardMaterial side={DoubleSide}>
				<RenderTexture attach="map" sourceFile={undefined}>
					<PerspectiveCamera makeDefault position={[0, 0, 5]} />
					<color attach="background" args={["white"]} />
					<Text ref={textRef} fontSize={1} color="#555">
						{text}
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
};

const Cube = () => {
	const faceProps = [
		{ position: [0.75, 0, 0], rotation: [0, Math.PI / 2, 0], text: "Typescript" },
		{ position: [-0.75, 0, 0], rotation: [0, -Math.PI / 2, 0], text: "React" },
		{ position: [0, 0.75, 0], rotation: [-Math.PI / 2, 0, 0], text: "HTML" },
		{ position: [0, -0.75, 0], rotation: [Math.PI / 2, 0, 0], text: "CSS" },
		{ position: [0, 0, 0.75], rotation: [0, 0, 0], text: "Github" },
		{ position: [0, 0, -0.75], rotation: [0, Math.PI, 0], text: "SQL" },
	];
	return (
		<>
			{faceProps.map((props, idx) => (
				<CubeFace key={idx} {...props} />
			))}
		</>
	);
};

export default Cube;
