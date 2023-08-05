import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import TechnicalSkills from "./TechnicalSkills";
import SocialMedia from "./SocialMedia";

const WorksSection = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
`;

const WorksContainer = styled.div`
	width: 70vw;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

const WorksLeft = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 768px) {
		padding: 20px;
		justify-content: center;
	}
`;

const WorksRight = styled.div`
	flex: 1;
`;

const WorksUl = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
`;

const moveText = keyframes`
	100% {
		width: 100%;
	}
`;

const WorksListItems = styled.li`
	font-size: 100px;
	font-weight: bold;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px white;
	position: relative;

	&:hover .afterItem {
		animation: ${moveText} 0.8s linear both;
	}

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0px white;
	}
`;

const AfterItem = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	width: 0;
	white-space: nowrap;
	color: pink;
`;

const data = [
	"Web Design",
	"Development",
	"Technical Skills",
	"Product Design",
	"Social Media",
];

const Works = () => {
	const [work, setWork] =  useState("Web Design");
	return (
		<WorksSection>
			<WorksContainer>
				<WorksLeft>
					<WorksUl>
						{data.map((item) => (
							<WorksListItems key={item} onClick={() => setWork(item)}>
								{item}
								<AfterItem className="afterItem">{item}</AfterItem>
							</WorksListItems>
						))}
					</WorksUl>
				</WorksLeft>
				<WorksRight>
					{work === "Web Design" ? (
						<WebDesign />
					) : work === "Development" ? (
						<Development />
					) : work === "Technical Skills" ? (
						<TechnicalSkills />
					) : work === "Product Design" ? (
						<ProductDesign />
					) : (
						<SocialMedia />
					)}
				</WorksRight>
			</WorksContainer>
		</WorksSection>
	);
};

export default Works;
