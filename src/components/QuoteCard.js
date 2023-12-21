import React from "react";
import styled from "styled-components";

const QuoteCardDiv = styled.div`
	width: 250px;
	max-height: 420px;
	margin: 12px 12px;
	flex-basis: 20%;
`;

const QuoteCardTextBox = styled.div`
	width: 250px;
	min-height: 320px;
	max-height: 320px;
	background-color: white;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
`;

const QuoteCardText = styled.p`
	padding-top: 40px;
	margin: 0px 20px;
	font-size: 18px;
`;

const QuoteCardPicture = styled.img`
	content: url(${(props) => props.src});
	position: relative;
	top: -150px;
`;

const QuoteCardIcon = styled.img`
	content: url("/quote-icon.png");
	position: relative;
	top: 30px;
	left: 20px;
`;

function QuoteCard({ quoteCardText, imgSrc }) {
	return (
		<QuoteCardDiv>
			<QuoteCardIcon />
			<QuoteCardTextBox>
				<QuoteCardText>{quoteCardText}</QuoteCardText>
			</QuoteCardTextBox>
			<QuoteCardPicture src={imgSrc} />
		</QuoteCardDiv>
	);
}

export default QuoteCard;
