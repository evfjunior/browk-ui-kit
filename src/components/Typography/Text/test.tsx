import { render, screen } from 'utils/test-helpers'
import { theme } from 'styles'

import { Text } from '.'

describe('<Text />', () => {
  it('renders a paragraph element', () => {
    const textContent = 'textContent'
    const { container } = render(<Text as="p">{textContent}</Text>)
    const text = screen.getByText(textContent)

    expect(container.querySelector('p')).toBeTruthy()
    expect(text).toBeInTheDocument()
  })

  it('renders a span element', () => {
    const textContent = 'textContent'
    const { container } = render(<Text as="span">{textContent}</Text>)
    const text = screen.getByText(textContent)

    expect(container.querySelector('span')).toBeTruthy()
    expect(text).toBeInTheDocument()
  })

  it('renders a black text by default', () => {
    const textContent = 'textContent'

    render(<Text as="span">{textContent}</Text>)

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({ color: theme.colors.black })
  })

  it('renders a text with the primary color', () => {
    const textContent = 'textContent'

    render(
      <Text as="span" color="primary">
        {textContent}
      </Text>
    )

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({ color: theme.colors.primary })
  })

  it('renders a white text', () => {
    const textContent = 'textContent'

    render(
      <Text as="span" color="white">
        {textContent}
      </Text>
    )

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({ color: theme.colors.white })
  })

  it('renders a text with its container currentColor', () => {
    const textContent = 'textContent'

    render(
      <div style={{ color: '#123456' }}>
        <Text as="span" color="currentColor">
          {textContent}
        </Text>
      </div>
    )

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({ color: theme.colors.currentColor })
  })

  it('renders a medium size text by default', () => {
    const textContent = 'textContent'
    const mediumStyles = {
      'font-size': theme.font.size.medium,
      'line-height': theme.font.lineHeight.medium
    }

    render(<Text as="span">{textContent}</Text>)

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(mediumStyles)
  })

  it('renders a small size text', () => {
    const textContent = 'textContent'
    const smallStyles = {
      'font-size': theme.font.size.small,
      'line-height': theme.font.lineHeight.small
    }

    render(
      <Text as="span" size="small">
        {textContent}
      </Text>
    )

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(smallStyles)
  })

  it('renders a large size text', () => {
    const textContent = 'textContent'
    const largeStyles = {
      'font-size': theme.font.size.large,
      'line-height': theme.font.lineHeight.large
    }

    render(
      <Text as="span" size="large">
        {textContent}
      </Text>
    )

    const text = screen.getByText(textContent)

    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(largeStyles)
  })
})
