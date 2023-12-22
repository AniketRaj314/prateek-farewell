import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
	position: relative;
	left: 0;
	bottom: 0;
	text-align: center;
	color: black;
	padding: 12px;
	background-color: #f4f6f7;
`;

function Footer() {
	return <FooterDiv>Made with 💖 by 2586Labs.</FooterDiv>;
}

export default Footer;
