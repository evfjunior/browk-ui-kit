import styled, { css, DefaultTheme } from 'styled-components'

import type { HeadingProps } from '.'

const modifiers = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size['4xl']};
    font-weight: ${theme.font.weight.black};
    line-height: ${theme.font.lineHeight['4xl']};
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size['3xl']};
    line-height: ${theme.font.lineHeight['3xl']};
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size['2xl']};
    line-height: ${theme.font.lineHeight['2xl']};
  `,
  h4: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xxlarge};
    line-height: ${theme.font.lineHeight.xxlarge};
  `,
  h5: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlarge};
    line-height: ${theme.font.lineHeight.xlarge};
  `,
  h6: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.large};
    line-height: ${theme.font.lineHeight.large};
  `
}

export const Component = styled('h2').attrs<Pick<HeadingProps, 'level'>>(
  ({ level }) => ({ as: level })
)<HeadingProps>`
  ${({ color, level, theme }) => css`
    color: ${theme.colors[color!]};
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    ${modifiers[level!](theme)}
  `}
`
