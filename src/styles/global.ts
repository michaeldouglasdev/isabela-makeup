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
		src: url("src/fonts/MrDeHaviland-Regular.ttf") format("truetype"),
			url("src/fonts/MrDeHaviland-Regular.woff") format("woff"),
			url("src/fonts/MrDeHaviland-Regular.woff2") format("woff2");
;
	}

	@font-face {
		font-family: "Prata";
		src: local("Prata"),
		url("src/fonts/Prata-Regular.ttf") format("truetype");
	}

	@font-face {font-family: "O PTICubaLibreTwo";
    src: url("https://db.onlinewebfonts.com/t/d095a95a5dde87cfb124088b1bd4676e.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/d095a95a5dde87cfb124088b1bd4676e.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/d095a95a5dde87cfb124088b1bd4676e.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/d095a95a5dde87cfb124088b1bd4676e.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/d095a95a5dde87cfb124088b1bd4676e.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/d095a95a5dde87cfb124088b1bd4676e.svg#O PTICubaLibreTwo") format("svg"); /* iOS 4.1- */
}
`;