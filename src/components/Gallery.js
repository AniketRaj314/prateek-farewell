import React from "react";
import styled from "styled-components";

const GallerySection = styled.div`
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 40px 0px;
`;

const Button = styled.button`
	width: 20vw;
	min-width: 100px;
	height: 50px;
	border-radius: 8px;
	border: 0px;
	background-color: rgb(55, 112, 255);
	color: white;
	box-shadow: rgba(3, 0, 92, 0.1) 0px 1px 4px;
	font-size: large;

	&:hover {
		background-color: rgb(35, 104, 251);
		cursor: pointer;
	}
`;

const HeadingStyle = {
	margin: "20px 40px",
	fontFamily: "Inter, sans-serif",
};

function Gallery() {
	return (
		<>
			<GallerySection>
				<div style={HeadingStyle}>
					<h1>Jog down the memory lane! 📸</h1>
				</div>
				<a href="https://photos.app.goo.gl/idVpvpiAhX1YUFzH8" target="_blank">
					<Button>Open Google Photos</Button>
				</a>
				<p>
					<i>Since we couldn't have asked you to build the best gallery component for us!</i>
				</p>
			</GallerySection>
		</>
	);
}

export default Gallery;
