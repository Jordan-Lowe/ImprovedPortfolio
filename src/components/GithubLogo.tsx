import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function GithubLogo(props) {
	const { nodes, materials } = useGLTF("../Images/GithubLogo-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Curve.geometry}
				material={materials["SVGMat.001"]}
				position={[-1.379, 2.851, 0.213]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
				scale={-99.532}
			/>
		</group>
	);
}

useGLTF.preload("../Images/GithubLogo-transformed.glb");
