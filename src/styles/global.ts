import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('/fonts/montserrat-v25-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('/fonts/montserrat-v25-latin-700.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      src: local('Montserrat Black'), local('Montserrat-Black'),
        url('/fonts/montserrat-v25-latin-900.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: local('Roboto Regular'), local('Roboto-Regular'),
        url('/fonts/roboto-v30-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: local('Roboto Medium'), local('Roboto-Medium'),
        url('/fonts/roboto-v30-latin-500.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: local('Roboto Bold'), local('Roboto-Bold'),
        url('/fonts/roboto-v30-latin-700.woff2') format('woff2');
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    *::after,
    *::before {
      box-sizing: inherit;
    }

    body,
    html,
    #__next {
      height: 100%;
    }

    html {
      min-width: 320px;
      font-size: 62.5%;
    }

    body {
      scroll-behavior: smooth;
    }
  `}
`
