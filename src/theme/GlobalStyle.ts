import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.colors.lightestGray};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  h1 {
    font-size: 5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.6rem;
  }

  ul, a {
    text-decoration: none;
    font-size: inherit;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  button, input, textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
