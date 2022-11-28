import { HTMLAttributes } from 'react'

import * as S from './styles'

type HeadingColors = 'black' | 'currentColor' | 'primary' | 'white'

type HeadingOwnProps = {
  /** Heading content */
  children: React.ReactNode
  /**
   * Text color
   * @default: black
   */
  color?: HeadingColors
  /**
   * Heading level from h1 to h6
   * @default: 'h2'
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type HeadingProps = HeadingOwnProps &
  Omit<HTMLAttributes<HTMLHeadingElement>, keyof HeadingOwnProps>

export function Heading({
  children,
  color = 'black',
  level = 'h2',
  ...rest
}: HeadingProps): JSX.Element {
  return (
    <S.Component color={color} level={level} {...rest}>
      {children}
    </S.Component>
  )
}
