import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";

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
`;

const WorksLeft = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
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
	"Illustration",
	"Product Design",
	"Social Media",
];

const Works = () => {
	const [work, setWork] = useState("Web Design");
	return (
		<WorksSection>
			<WorksContainer>
				<WorksLeft>
					<WorksUl>
						{data.map((item) => (
							<WorksListItems
								key={item}
								onClick={() => setWork(item)}
							>
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
					) : (
						<ProductDesign />
					)}
				</WorksRight>
			</WorksContainer>
		</WorksSection>
	);
};

export default Works;
