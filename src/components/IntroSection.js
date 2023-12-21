import React from "react";
import styled from "styled-components";

const IntroSectionDiv = styled.div`
	width: 100%;
	min-height: 95vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(3vw + 2px);
	font-family: anime-ace;
`;

const BackGroundImage = styled.img`
	content: url("https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/d9d49351-5be5-4c35-ba8c-ce6c52f3c33a.png");
	position: absolute;
	top: 10%;
	left: calc(50% - 15vw);
	width: 30vw;
	height: auto;
	z-index: -100;
	opacity: 20%;
`;

function IntroSection() {
	return (
		<>
			<IntroSectionDiv>
				<p>Onwards and Upwards, Prateek!</p>
			</IntroSectionDiv>
			<BackGroundImage />
		</>
	);
}

export default IntroSection;
