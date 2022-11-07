import * as NextImage from 'next/image'
import { ThemeProvider } from 'styled-components'
import { themes } from '@storybook/theming'

import { GlobalStyles, theme } from '../src/styles'

const OriginaNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginaNextImage {...props} unoptimized />
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: { current: 'dark' },
  docs: {
    theme: themes.dark
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
