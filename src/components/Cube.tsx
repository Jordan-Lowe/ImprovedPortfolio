import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import React, { useRef } from "react";
import { Object3D } from "three";
import "../../public/styling/test.css";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
	const textRef = useRef<Object3D | null>(null);
	useFrame((state) => {
		if (textRef.current) {
			textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
		}
	});
	return (
		<>
			<mesh>
				<boxGeometry />
				<meshStandardMaterial>
					<RenderTexture attach="map" sourceFile={undefined}>
						<PerspectiveCamera makeDefault position={[0, 0, 5]} />
						<color attach="background" args={["white"]} />
						<Text ref={textRef} fontSize={2} color="#555">
							Hello
						</Text>
					</RenderTexture>
				</meshStandardMaterial>
			</mesh>
		</>
	);
};

export default Cube;
