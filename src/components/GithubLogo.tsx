import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function GithubLogo(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("../Images/GithubLogo-transformed.glb");

	const newMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				color: "#94849b",
				opacity: 0,
				transparent: false,
			}),
		[]
	);


	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Curve.geometry}
				material={newMaterial}
				position={[-1.379, 2.851, 0.213]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
				scale={-99.532}
			/>
		</group>
	);
}

useGLTF.preload("../Images/GithubLogo-transformed.glb");
