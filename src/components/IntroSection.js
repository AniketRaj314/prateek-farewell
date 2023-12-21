import React from "react";
import styled from "styled-components";

const IntroSectionDiv = styled.div`
	width: 100%;
	min-height: 95vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: calc(3vw + 2px);
	font-family: anime-ace;
`;

const BackGroundImage = styled.div`
	background-image: url("https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/4d64557d-0a75-47c4-9b7b-058cad944f92.png");
	width: 20vw;
	height: auto;
	width: 400px;
	height: 400px;
	background-position: center center;
	background-size: cover;
	border-radius: 50%;
	border: 4px solid #444444;
`;

function IntroSection() {
	return (
		<>
			<IntroSectionDiv>
				<BackGroundImage />
				<p>Onwards and Upwards, Prateek! 🫡</p>
			</IntroSectionDiv>
		</>
	);
}

export default IntroSection;
