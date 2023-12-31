import React, { useState, lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import skills from "../LanguageInformation/skills.ts";
import Spinner from "./Spinner.tsx";
<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap');
</style>;

const WhoSection = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
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

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const WhoRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	position: relative;

	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const WhoTitle = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
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
	color: #57a773;
	font-size: 30px;
`;

const WhoListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
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

const WhoListDescription = styled.p`
	display: flex;
	flex-direction: row;
	top: 39%;
	left: 50%;
	width: 60%;
	padding: 10px;
	color: white;
	border-radius: 5px;
	overflow: hidden;
	white-space: normal;
	font-size: 20px;
	font-weight: 400;
	height: auto;
	position: absolute;
	font-family: "Lato", sans-serif;

	@media only screen and (max-width: 768px) {
		margin: auto;
	}
`;

interface Skill {
	name: string;
	description: string;
}

function textWithBreaks(text: string) {
	return text.split("\n").map((item, key) => {
		return (
			<React.Fragment key={key}>
				{item}
				<br />
			</React.Fragment>
		);
	});
}

const Cube = lazy(() => import("./Cube"));

const Who = () => {
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
	return (
		<>
			<WhoSection>
				<WhoContainer>
					<WhoLeft>
						<Suspense fallback={<Spinner />}>
							<Canvas camera={{ fov: 25, position: [6, 6, 6] }}>
								<OrbitControls enableZoom={false} autoRotate />
								<ambientLight intensity={1} />
								<directionalLight position={[3, 2, 1]} />
								<Cube />
							</Canvas>
						</Suspense>
					</WhoLeft>
					<WhoRight>
						<WhoTitle>About My Work</WhoTitle>
						<WhoWhatIDo>
							<Suspense fallback={<Spinner />}>
								<WhoLine src="../Images/line.png" alt="line" />
							</Suspense>
							<WhoSubtitle>Technical Skills</WhoSubtitle>
						</WhoWhatIDo>
						<WhoListContainer>
							<WhoList>
								{skills.map((skill: Skill, index: number) => (
									<WhoDescription
										key={index}
										onClick={() => setSelectedSkill(skill)}
									>
										{skill.name}
									</WhoDescription>
								))}
							</WhoList>

							{selectedSkill && (
								<WhoListDescription>
									{textWithBreaks(selectedSkill.description)}
								</WhoListDescription>
							)}
						</WhoListContainer>
					</WhoRight>
				</WhoContainer>
			</WhoSection>
		</>
	);
};

export default Who;
