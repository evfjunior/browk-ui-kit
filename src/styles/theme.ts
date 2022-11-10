import { css, keyframes } from 'styled-components'

export const theme = {
  animation: {
    spin: keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(359deg) }`
  },
  border: {
    radius: '0.4rem',
    rounded: '5rem'
  },
  colors: {
    primary: 'hsl(257, 74%, 57%)',
    primaryHover: 'hsl(257, 54%, 45%)',
    primaryActive: 'hsl(257, 52%, 36%)',
    primaryDisabled: 'hsl(257, 72%, 92%)',
    primaryTransparent: 'hsla(257, 74%, 57%, 0.04)',
    primarySemiTransparent: 'hsla(257, 74%, 57%, 0.16)',
    black: 'hsl(0, 0%, 7%)',
    blackT: 'hsla(0, 0%, 7%, 0.48)',
    white: 'hsl(0, 0%, 100%)',
    whiteS: 'hsla(0, 0%, 100%, 0.88)',
    whiteTransparent: 'hsla(0, 0%, 100%, 0.12)',
    whiteSemiTransparent: 'hsla(0, 0%, 100%, 0.16)',
    grayM: 'hsl(0, 0%, 98%)',
    grayL: 'hsl(0, 0%, 95%)',
    grayS: 'hsl(0, 0%, 83%)',
    gray: 'hsla(0, 0%, 83%, 0.48)',
    grayK: 'hsl(0, 0%, 42%)',
    blue: 'hsl(216, 94%, 62%)',
    green: 'hsl(145, 63%, 42%)',
    red: 'hsl(2, 66%, 58%)',
    redS: 'hsl(2, 64%, 47%)',
    redL: 'hsl(0, 61%, 87%)'
  },
  display: {
    flexCenter: () => css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    inlineFlexCenter: () => css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `
  },
  font: {
    family: {
      main: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      heading:
        "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    },
    lineHeight: {
      small: '2rem',
      medium: '2.4rem',
      large: '2.8rem',
      xlarge: '3.2rem',
      xxlarge: '4rem',
      '2xl': '4.8rem',
      '3xl': '5.6rem',
      '4xl': '6.4rem'
    },
    size: {
      small: '1.3rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.4rem',
      xxlarge: '3.2rem',
      '2xl': '4rem',
      '3xl': '4.8rem',
      '4xl': '5.6rem'
    },
    weight: {
      normal: 400,
      bold: 700,
      black: 900
    }
  },
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  spacings: {
    tiny: '0.2rem',
    xxsmall: '0.4rem',
    xsmall: '0.8rem',
    small: '1rem',
    medium: '1.6rem',
    large: '2rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '0.5s ease-in-out'
  }
} as const
