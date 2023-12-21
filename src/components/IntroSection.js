import React from "react";
import styled from "styled-components";

const IntroSectionDiv = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(5vw + 2px);
`;

function IntroSection() {
	return <IntroSectionDiv>We will miss you Prateek!</IntroSectionDiv>;
}

export default IntroSection;
