import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GithubLogo from "./GithubLogo";

const SocialMedia = () => {
	return (
		<>
			<Canvas>
				<Stage environment={"dawn"} intensity={0.9}>
					<GithubLogo />
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

export default SocialMedia;
