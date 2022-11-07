import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  Ref
} from 'react'
import { Loader4 as SpinnerIcon } from '@styled-icons/remix-line'

import * as S from './styles'

type ColorVariants =
  | 'flat'
  | 'flatWhite'
  | 'primary'
  | 'primaryWhite'
  | 'secondary'
  | 'secondaryDark'
  | 'secondaryWhite'

export type ClickableOwnProps = {
  /**
   * It fills the component's attribute 'aria-label'.
   * Use this prop when you render a component without a textual content.
   */
  accessibleLabel?: string
  /** The component's textual content. */
  children?: string
  /** WAI-ARIA attribute to control the disabled state. */
  disabled?: boolean
  /** Makes the component span the full width of its parent container */
  fullWidth?: boolean
  /** URL for a link to be forwarded to. */
  href?: string
  /** Icon to be rendered alone or at the left side of the textual content. */
  icon?: JSX.Element
  /** Toggles the loading state. */
  loading?: boolean
  /** Applies rounded borders. */
  rounded?: boolean
  /**
   * Changes the color variant.
   * @default: 'primary'
   */
  variant?: ColorVariants
}

type AnchorProps = ClickableOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ClickableOwnProps> & {
    as: 'a'
  }

type ButtonProps = ClickableOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ClickableOwnProps> & {
    as: 'button'
  }

export type ClickableProps = AnchorProps | ButtonProps

function ClickableComponent(
  {
    accessibleLabel,
    children,
    disabled = false,
    fullWidth = false,
    icon,
    loading = false,
    rounded = false,
    variant = 'primary',
    ...rest
  }: ClickableProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: Ref<any>
): JSX.Element {
  const commonProps = {
    'aria-disabled': disabled,
    'aria-label': loading ? 'loading' : accessibleLabel,
    disabled,
    fullWidth,
    loading,
    ref,
    rounded,
    variant
  }
  const content = (): JSX.Element => (
    <>
      {loading && (
        <S.Spinner>
          <SpinnerIcon />
        </S.Spinner>
      )}

      <S.Content>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        {!!children && <S.Label>{children}</S.Label>}
      </S.Content>
    </>
  )
  const renderAs = {
    a: (otherProps: object) => (
      <S.Component
        as="a"
        rel="noreferrer noopener"
        {...commonProps}
        {...otherProps}
      >
        {content()}
      </S.Component>
    ),
    button: (otherProps: object) => (
      <S.Component as="button" {...commonProps} {...otherProps}>
        {content()}
      </S.Component>
    )
  }

  return renderAs[rest.as](rest)
}

export const Clickable = forwardRef(ClickableComponent)
