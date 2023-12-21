import QuoteCard from "./components/QuoteCard";
import IntroSection from "./components/IntroSection";
import { QuotesData } from "./data/data";
import styled from "styled-components";

const QuoteSection = styled.div`
	width: 60vw;
	color: black;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const QuoteSectionStyle = {
	display: "flex",
	justifyContent: "center",
};

function App() {
	return (
		<>
			<IntroSection />
			<div style={QuoteSectionStyle}>
				<QuoteSection>
					{QuotesData.map((quote, index) => (
						<QuoteCard quoteCardText={quote.quoteCardText} imgSrc={quote.imgSrc} />
					))}
				</QuoteSection>
			</div>
		</>
	);
}

export default App;
