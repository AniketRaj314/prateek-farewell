import QuoteCard from "./components/QuoteCard";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
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
	fontFamily: "Inter, sans-serif",
	display: "flex",
	justifyContent: "center",
};

function App() {
	return (
		<>
			<IntroSection />
			<div style={QuoteHeadingStyle}>
				<h1>A few words from the team 💖</h1>
			</div>
			<div style={QuoteSectionStyle}>
				<QuoteSection>
					<br />
					{QuotesData.map((quote, index) => (
						<QuoteCard
							quoteCardText={quote.quoteCardText}
							imgSrc={quote.imgSrc}
							name={quote.name}
							key={`quote-card-${index}`}
						/>
					))}
				</QuoteSection>
			</div>
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
