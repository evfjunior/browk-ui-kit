import { HTMLAttributes } from 'react'

import type { TextColor } from 'components/Typography'

import * as S from './styles'

type HeadingOwnProps = {
  /** Heading content */
  children: React.ReactNode
  /**
   * Text color
   * @default: black
   */
  color?: TextColor
  /**
   * Heading level from h1 to h6
   * @default: 'h2'
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type HeadingProps = HeadingOwnProps & HTMLAttributes<HTMLHeadingElement>

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
