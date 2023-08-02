import React from "react";
import NavBar from "./NavBar";
import styled, { keyframes } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const animate = keyframes`
	100% {
		transform: translateY(70px);
	}
`;

const HeroSection = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const HeroContainer = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 70vw;
	display: flex;
	justify-content: space-between;
`;

const HeroLeft = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
`;

const HeroRight = styled.div`
	flex: 3;
	position: relative;
`;

const HeroTitle = styled.h1`
	font-size: 74px;
	margin-bottom: 0;
`;

const HeroWhatIDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const HeroLine = styled.img`
	height: 15px;
`;

const HeroSubtitle = styled.h2`
	color: #da4ea2;
	font-size: 30px;
`;

const HeroDescription = styled.p`
	font-size: 24px;
	color: lightgray;
`;

const HeroButton = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const HeroImage = styled.img`
	width: 800px;
	height: 600px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: ${animate} 2s infinite ease alternate;
	pointer-events: none;
`;

const Hero = () => {
	return (
		<>
			<HeroSection>
				<NavBar />
				<HeroContainer>
					<HeroLeft>
						<HeroTitle>Jordan Lowe</HeroTitle>
						<HeroWhatIDo>
							<HeroLine src="../public/Images/line.png" alt="line" />
							<HeroSubtitle>Software Developer</HeroSubtitle>
						</HeroWhatIDo>
						<HeroDescription>
							I'm a proud graduate of Dev Academy, with a passion for devising
							innovative software solutions that resonate. My time at Dev
							Academy, filled with intensive pair programming, diverse team
							projects, and in-depth independent study, has enriched my
							technical expertise and cemented my enthusiasm for coding. My core
							strengths lie in JavaScript, TypeScript, React, and SQL, and I'm
							continually refining these skills, while concurrently exploring
							the fascinating realm of Python.
						</HeroDescription>
						<HeroButton>Learn More</HeroButton>
					</HeroLeft>
					<HeroRight>
						<Canvas>
							<OrbitControls enableZoom={false} />
							<ambientLight intensity={1} />
							<directionalLight position={[3, 2, 1]} />
							<Sphere args={[1, 100, 200]} scale={2.4}>
								<MeshDistortMaterial
									color="#5787f7"
									attach="material"
									distort={0.5}
									speed={2}
								/>
							</Sphere>
						</Canvas>
						<HeroImage src="../public/Images/moon.png" alt="moon image" />
					</HeroRight>
				</HeroContainer>
			</HeroSection>
		</>
	);
};

export default Hero;
