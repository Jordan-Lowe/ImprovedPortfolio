import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function UTypescriptLogo(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(
		"../Images/uTypescriptLogo-transformed.glb"
	);

	const newMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				color: "#007acc",
			}),
		[]
	);

	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Curve.geometry}
				material={newMaterial}
				position={[0.033, 2.177, 1.382]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
				scale={-116.892}
			/>
		</group>
	);
}

useGLTF.preload("../Images/uTypescriptLogo-transformed.glb");
