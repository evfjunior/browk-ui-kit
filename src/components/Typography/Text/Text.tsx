import { HTMLAttributes } from 'react'

import type { TextColor, TextSize } from 'components/Typography'

import * as S from './styles'

export type TextOwnProps = {
  /** Text content */
  children: React.ReactNode
  /**
   * Text color
   * @default: black
   */
  color?: TextColor
  /**
   * Text size
   * @default: medium
   */
  size?: TextSize
}

type ParagraphProps = TextOwnProps &
  Omit<HTMLAttributes<HTMLParagraphElement>, keyof TextOwnProps> & { as: 'p' }

type SpanProps = TextOwnProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof TextOwnProps> & { as: 'span' }

export type TextProps = ParagraphProps | SpanProps

export function Text({
  children,
  color = 'black',
  size = 'medium',
  ...rest
}: TextProps): JSX.Element {
  return (
    <S.Component color={color} size={size} {...rest}>
      {children}
    </S.Component>
  )
}
