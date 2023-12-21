import QuoteCard from "./components/QuoteCard";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";
import { QuotesData } from "./data/data";
import styled from "styled-components";

const QuoteSection = styled.div`
	width: 70vw;
	color: black;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const QuoteSectionStyle = {
	display: "flex",
	justifyContent: "center",
	width: "100%",
	backgroundColor: "#F4F6F7",
};

const QuoteHeadingStyle = {
	margin: "0px 40px",
	backgroundColor: "#F4F6F7",
};

function App() {
	return (
		<>
			<IntroSection />
			<h1 style={QuoteHeadingStyle}>A few words from the team 💖</h1>
			<div style={QuoteSectionStyle}>
				<QuoteSection>
					<br />
					{QuotesData.map((quote, index) => (
						<QuoteCard quoteCardText={quote.quoteCardText} imgSrc={quote.imgSrc} />
					))}
				</QuoteSection>
			</div>
			<Footer />
		</>
	);
}

export default App;
