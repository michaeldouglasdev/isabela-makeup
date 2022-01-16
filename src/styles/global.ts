import { createGlobalStyle } from "styled-components";
import '../fonts/MrDeHaviland-Regular.ttf';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
		scroll-behavior: smooth;
	}
	body {
		-webkit-font-smoothing: antialised;
	}
	body, input, button {
		font-size: 16px;
	}
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
	}
	button {
		cursor: pointer;
	}

	@font-face {
		font-family: "Mr De Haviland";
		src: local("Mr De Haviland"),
		url("src/fonts/MrDeHaviland-Regular.ttf") format("truetype");
	}

	@font-face {
		font-family: "Prata";
		src: local("Prata"),
		url("src/fonts/Prata-Regular.ttf") format("truetype");
	}
`;