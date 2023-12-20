import QuoteCard from "./components/QuoteCard";
import { QuotesData } from "./data/data";
import styled from "styled-components";

const QuoteSection = styled.div`
	background-color: #3770ff;
	min-height: 100vh;
	color: black;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

function App() {
	return (
		<QuoteSection>
			{QuotesData.map((quote, index) => (
				<QuoteCard quoteCardText={quote.quoteCardText} imgSrc={quote.imgSrc} />
			))}
		</QuoteSection>
	);
}

export default App;
