import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SciFiCom(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(
		"../../public/Images/sciFiCom-transformed.glb"
	);
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.scifi_computer_screen_0.geometry}
				material={materials.screen}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.scifi_computer_computer_0.geometry}
				material={materials.computer}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.scifi_computer_keyboard_0.geometry}
				material={materials.keyboard}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.scifi_computer_keys_0.geometry}
				material={materials.keys}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload("/sciFiCom-transformed.glb");
