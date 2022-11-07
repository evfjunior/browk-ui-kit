import styled, { css, DefaultTheme } from 'styled-components'

import { ClickableProps } from '.'

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    :hover {
      background-color: ${theme.colors.primaryHover};
    }

    :active {
      background-color: ${theme.colors.primaryActive};
    }

    :disabled {
      background-color: ${theme.colors.primaryDisabled};
      opacity: 1;
    }
  `,
  primaryWhite: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    :hover {
      background-color: ${theme.colors.whiteS};
    }

    :disabled {
      background-color: ${theme.colors.white};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    box-shadow: inset 0 0 0 ${theme.spacings.tiny} ${theme.colors.primary};

    :hover {
      background-color: ${theme.colors.primaryTransparent};
    }

    :active {
      background-color: ${theme.colors.primarySemiTransparent};
    }
  `,
  secondaryWhite: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    box-shadow: inset 0 0 0 ${theme.spacings.tiny} ${theme.colors.white};

    :hover {
      background-color: ${theme.colors.whiteTransparent};
    }

    :active {
      background-color: ${theme.colors.whiteSemiTransparent};
    }
  `,
  secondaryDark: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    box-shadow: inset 0 0 0 ${theme.spacings.tiny} ${theme.colors.black};

    :hover {
      background-color: ${theme.colors.whiteTransparent};
    }

    :active {
      background-color: ${theme.colors.whiteSemiTransparent};
    }
  `,
  flat: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};

    :hover {
      background-color: ${theme.colors.primaryTransparent};
    }

    :active {
      background-color: ${theme.colors.primarySemiTransparent};
    }
  `,
  flatWhite: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};

    :hover {
      background-color: ${theme.colors.whiteTransparent};
    }

    :active {
      background-color: ${theme.colors.whiteSemiTransparent};
    }
  `
}

export const Component = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['loading'].includes(prop) && defaultValidatorFn(prop)
})<Omit<ClickableProps, 'children'>>`
  ${({ fullWidth, loading, rounded, theme, variant }) => css`
    position: relative;
    ${theme.display.inlineFlexCenter}
    padding: ${theme.spacings.small};
    width: ${fullWidth ? '100%' : 'fit-content'};
    border: none;
    border-radius: ${rounded ? theme.border.rounded : theme.border.radius};
    outline: none;
    background: transparent;
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.normal};
    line-height: 2.4rem;
    text-decoration: none;
    cursor: pointer;
    pointer-events: ${loading ? 'none' : 'all'};
    transition: all ${theme.transition.default};
    -webkit-tap-highlight-color: transparent;

    :disabled {
      opacity: 0.56;
      pointer-events: none;
    }

    :focus {
      box-shadow: inset 0 0 0 ${theme.spacings.tiny} ${theme.colors.blackT};
    }

    :has(${Label}) {
      padding: ${theme.spacings.small} ${theme.spacings.large};
    }

    ${Content} {
      opacity: ${loading ? '0' : '1'};
    }

    ${!!variant && modifiers[variant](theme)}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    ${theme.display.inlineFlexCenter}
    gap: ${theme.spacings.xsmall};
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    ${theme.display.flexCenter}
    height: ${theme.font.size.large};
    width: ${theme.font.size.large};
  `}
`

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.display.inlineFlexCenter}
  `}
`

export const Spinner = styled.div`
  ${({ theme }) => css`
    position: absolute;
    ${theme.display.flexCenter}
    height: ${theme.font.size.large};
    width: ${theme.font.size.large};
    animation: ${theme.animation.spin} 1s infinite linear;
  `}
`
