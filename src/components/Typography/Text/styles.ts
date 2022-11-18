import styled, { css } from 'styled-components'

import type { TextProps } from '.'

export const Component = styled.span<TextProps>`
  ${({ color, size, theme }) => css`
    color: ${theme.colors[color!]};
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size[size!]};
    line-height: ${theme.font.lineHeight[size!]};
  `}
`
