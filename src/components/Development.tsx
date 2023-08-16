import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import UTypescriptLogo from "./UTypescriptLogo";

const Development = () => {
	return (
		<>
			<Canvas>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<Stage environment={"sunset"} intensity={0.2}>
					<UTypescriptLogo />
				</Stage>
				<OrbitControls
					enableZoom={false}
					autoRotate={false}
					autoRotateSpeed={4}
				/>
			</Canvas>
		</>
	);
};
export default Development;
