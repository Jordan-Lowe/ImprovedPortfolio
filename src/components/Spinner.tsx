import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerAn = styled.div`
	width: 40px;
	height: 40px;
	border: 4px solid #f3f3f3;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	animation: ${spin} 1s linear infinite;
	margin: 0 auto;
`;

const Spinner = () => {
	return <SpinnerAn></SpinnerAn>;
};

export default Spinner;
