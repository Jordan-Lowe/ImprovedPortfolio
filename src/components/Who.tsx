import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import styled from "styled-components";

const WhoSection = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const WhoContainer = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 70vw;
	display: flex;
	justify-content: space-between;
`;

const WhoLeft = styled.div`
	flex: 1;
`;

const WhoRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	position: relative;
`;

const WhoTitle = styled.h1`
	font-size: 74px;
`;

const WhoWhatIDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const WhoLine = styled.img`
	height: 15px;
`;

const WhoSubtitle = styled.h2`
	color: #da4ea2;
	font-size: 30px;
`;

const WhoList = styled.ul`
	margin-top: 0;
	margin-left: 0;
	list-style: none;
	margin-bottom: 15px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

const WhoDescription = styled.li`
	font-size: 25px;
	color: lightgray;
	margin-bottom: 10px;
	transition-property: transform;
	transition-duration: 300ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;

	&:hover {
		transform-style: flat;
		transform: scale(1.15);
	}
`;

const WhoButton = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 120px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Who = () => {
	return (
		<>
			<WhoSection>
				<WhoContainer>
					<WhoLeft>
						<Canvas camera={{ fov: 25, position: [6, 6, 6] }}>
							<OrbitControls enableZoom={false} autoRotate />
							<ambientLight intensity={1} />
							<directionalLight position={[3, 2, 1]} />
							<Cube />
						</Canvas>
					</WhoLeft>
					<WhoRight>
						<WhoTitle>About My Work</WhoTitle>
						<WhoWhatIDo>
							<WhoLine src="../public/Images/line.png" alt="line" />
							<WhoSubtitle>Technical Skills</WhoSubtitle>
						</WhoWhatIDo>
						<WhoList>
							<WhoDescription>Typescript/Javascript</WhoDescription>
							<WhoDescription>React</WhoDescription>
							<WhoDescription>HTML/CSS</WhoDescription>
							<WhoDescription>SQL</WhoDescription>
							<WhoDescription>React Queries & Redux</WhoDescription>
							<WhoDescription>Github</WhoDescription>
							<WhoDescription>Vitest & Jest</WhoDescription>
							<WhoDescription>Python</WhoDescription>
						</WhoList>
						<WhoButton>See Projects</WhoButton>
					</WhoRight>
				</WhoContainer>
			</WhoSection>
		</>
	);
};

export default Who;
