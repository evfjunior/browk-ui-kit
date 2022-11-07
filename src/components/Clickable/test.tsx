import userEvent from '@testing-library/user-event'
import Link from 'next/link'
import { Plus } from '@styled-icons/evaicons-solid'

import { render, screen } from 'utils/test-helpers'
import { theme } from 'styles'

import { Clickable } from '.'

describe('<Clickable />', () => {
  it('renders a button component', () => {
    const labelText = 'labelText'

    render(<Clickable as="button">{labelText}</Clickable>)

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('renders a disabled button', () => {
    const labelText = 'labelText'

    render(
      <Clickable as="button" disabled>
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(label).toBeInTheDocument()

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveAttribute('aria-disabled', 'true')
    expect(button).toHaveStyle({ 'pointer-events': 'none' })
    expect(label).toBeInTheDocument()
  })

  it('renders a loading button', () => {
    const labelText = 'labelText'

    render(
      <Clickable as="button" loading>
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const content = screen.getByText(labelText).parentElement

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'loading')
    expect(content).toHaveStyle({ opacity: 0 })
  })

  it('makes sure the button is accessible by keyboard', async () => {
    const labelText = 'labelText'
    const user = userEvent.setup()

    render(<Clickable as="button">{labelText}</Clickable>)

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).not.toHaveFocus()
    expect(label).toBeInTheDocument()

    await user.tab()
    expect(button).toHaveFocus()
  })

  it("calls the button's onClick fuction correctly", async () => {
    const labelText = 'labelText'
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Clickable as="button" onClick={handleClick}>
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).not.toHaveFocus()
    expect(handleClick).not.toBeCalled()
    expect(label).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveFocus()
    expect(handleClick).toBeCalled()
  })

  it('makes sure the onClick function can be called by keyboard', async () => {
    const labelText = 'labelText'
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Clickable as="button" onClick={handleClick}>
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).not.toHaveFocus()
    expect(handleClick).not.toBeCalled()
    expect(label).toBeInTheDocument()

    await user.tab()
    expect(button).toHaveFocus()

    await user.keyboard('[Enter]')
    expect(handleClick).toBeCalledTimes(1)

    await user.keyboard('[Space]')
    expect(handleClick).toBeCalledTimes(2)
  })

  it('renders a primary button as default', () => {
    const labelText = 'labelText'
    const primaryStyles = {
      'background-color': theme.colors.primary,
      color: theme.colors.white
    }

    render(<Clickable as="button">{labelText}</Clickable>)

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(primaryStyles)
    expect(label).toBeInTheDocument()
  })

  it('renders a fullWidth button', () => {
    const labelText = 'labelText'

    render(
      <Clickable as="button" fullWidth>
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ width: '100%' })
    expect(label).toBeInTheDocument()
  })

  it('renders a primaryWhite button', () => {
    const labelText = 'labelText'
    const primaryWhiteStyles = {
      'background-color': theme.colors.white,
      color: theme.colors.primary
    }

    render(
      <Clickable as="button" variant="primaryWhite">
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(primaryWhiteStyles)
    expect(label).toBeInTheDocument()
  })

  it('renders a secondary button', () => {
    const labelText = 'labelText'
    const secondaryStyles = {
      'background-color': 'transparent',
      color: theme.colors.primary
    }

    render(
      <Clickable as="button" variant="secondary">
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(secondaryStyles)
    expect(label).toBeInTheDocument()
  })

  it('renders a button with an icon and a label', () => {
    const labelText = 'labelText'

    render(
      <Clickable as="button" icon={<Plus data-testid="icon" />}>
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const icon = screen.getByTestId('icon')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('renders a button with an icon only', () => {
    const accessibleLabel = 'accessibleLabel'

    render(
      <Clickable
        as="button"
        accessibleLabel={accessibleLabel}
        icon={<Plus data-testid="icon" />}
      />
    )

    const button = screen.getByRole('button')
    const icon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', accessibleLabel)
    expect(icon).toBeInTheDocument()
  })

  it('renders a rounded button', () => {
    const accessibleLabel = 'accessibleLabel'

    render(
      <Clickable
        as="button"
        accessibleLabel={accessibleLabel}
        icon={<Plus data-testid="icon" />}
        rounded
      />
    )

    const button = screen.getByRole('button')
    const icon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', accessibleLabel)
    expect(button).toHaveStyle({ 'border-radius': theme.border.rounded })
    expect(icon).toBeInTheDocument()
  })

  it('renders a secondaryWhite rounded button', () => {
    const labelText = 'labelText'
    const secondaryWhiteStyles = {
      'background-color': 'transparent',
      color: theme.colors.white
    }

    render(
      <Clickable as="button" variant="secondaryWhite">
        {labelText}
      </Clickable>
    )

    const button = screen.getByRole('button')
    const label = screen.getByText(labelText)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(secondaryWhiteStyles)
    expect(label).toBeInTheDocument()
  })

  it('renders a rounded secondaryDark button', () => {
    const accessibleLabel = 'accessibleLabel'
    const roundedStyles = {
      'border-radius': theme.border.rounded
    }
    const secondaryDarkStyles = {
      background: 'transparent',
      color: theme.colors.black,
      'box-shadow': `inset 0 0 0 ${theme.spacings.tiny} hsl(0,0%,7%)`
    }

    render(
      <Clickable
        as="button"
        accessibleLabel={accessibleLabel}
        icon={<Plus data-testid="icon" />}
        variant="secondaryDark"
        rounded
      />
    )

    const button = screen.getByRole('button')
    const icon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', accessibleLabel)
    expect(button).toHaveStyle({ ...roundedStyles, ...secondaryDarkStyles })
    expect(icon).toBeInTheDocument()
  })

  it('renders a link component', () => {
    const labelText = 'labelText'
    const linkHref = '/link'

    render(
      <Clickable as="a" href={linkHref}>
        {labelText}
      </Clickable>
    )

    const label = screen.getByText(labelText)
    const link = label.closest('a')

    expect(link).toHaveAttribute('href', linkHref)
    expect(label).toBeInTheDocument()
  })

  it('makes sure the link is accessible by keyboard', async () => {
    const labelText = 'labelText'
    const linkHref = '/link'
    const user = userEvent.setup()

    render(
      <Clickable as="a" href={linkHref}>
        {labelText}
      </Clickable>
    )

    const label = screen.getByText(labelText)
    const link = label.closest('a')

    expect(label).toBeInTheDocument()
    expect(link).toHaveAttribute('href', linkHref)
    expect(link).not.toHaveFocus()

    await user.tab()
    expect(link).toHaveFocus()
  })

  it('renders a link wrapped by another Link component', () => {
    const labelText = 'labelText'
    const linkHref = '/link'

    render(
      <Link href={linkHref} passHref legacyBehavior>
        <Clickable as="a">{labelText}</Clickable>
      </Link>
    )

    const label = screen.getByText(labelText)
    const link = label.closest('a')

    expect(link).toHaveAttribute('href', linkHref)
    expect(label).toBeInTheDocument()
  })

  it('renders a flat link', () => {
    const labelText = 'labelText'
    const linkHref = '/link'
    const flatStyles = {
      background: 'transparent',
      color: theme.colors.primary
    }

    render(
      <Clickable as="a" href={linkHref} variant="flat">
        {labelText}
      </Clickable>
    )

    const label = screen.getByText(labelText)
    const link = label.closest('a')

    expect(link).toHaveAttribute('href', linkHref)
    expect(link).toHaveStyle(flatStyles)
    expect(label).toBeInTheDocument()
  })

  it('renders a flatWhite link', () => {
    const labelText = 'labelText'
    const linkHref = '/link'
    const flatWhiteStyles = {
      background: 'transparent',
      color: theme.colors.white
    }

    render(
      <Clickable as="a" href={linkHref} variant="flatWhite">
        {labelText}
      </Clickable>
    )

    const label = screen.getByText(labelText)
    const link = label.closest('a')

    expect(link).toHaveAttribute('href', linkHref)
    expect(link).toHaveStyle(flatWhiteStyles)
    expect(label).toBeInTheDocument()
  })
})
