import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins-Regular',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 color: ${({ theme }) => theme.colors.mainLigth};
 text-align: center;
}

@font-face {
  font-family: 'Poppins-Regular';
  src: url(./assets/fonts/Poppins-Regular.woff) format('woff'),
    url(./assets/fonts/Poppins-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Poppins-SemiBold';
  src: url(./assets/fonts/Poppins-SemiBold.woff) format('woff'),
    url(./assets/fonts/Poppins-SemiBold.woff2) format('woff2');
}

@font-face {
  font-family: 'Poppins-Bold';
  src: url(./assets/fonts/Poppins-Bold.woff) format('woff'),
    url(./assets/fonts/Poppins-Bold.woff2) format('woff2');
}

p,
h1,
h2,
h3,
h4,h5,h6 {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
   width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;
