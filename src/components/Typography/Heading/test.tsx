import { render, screen } from 'utils/test-helpers'
import { theme } from 'styles'

import { Heading } from '.'

describe('<Heading />', () => {
  it('renders an h2 heading element by default', () => {
    const textContent = 'textContent'

    render(<Heading>{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 2 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders a white h2 heading element', () => {
    const textContent = 'textContent'

    render(<Heading color="white">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 2 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({ color: theme.colors.white })
    expect(content).toBeInTheDocument()
  })

  it('renders a primary color h2 heading element', () => {
    const textContent = 'textContent'

    render(<Heading color="primary">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 2 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({ color: theme.colors.primary })
    expect(content).toBeInTheDocument()
  })

  it('renders an h2 heading element with its container currentColor', () => {
    const textContent = 'textContent'

    render(
      <div style={{ color: '#123456' }}>
        <Heading color="currentColor">{textContent}</Heading>
      </div>
    )

    const heading = screen.getByRole('heading', { level: 2 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({ color: theme.colors.currentColor })
    expect(content).toBeInTheDocument()
  })

  it('renders an h1 heading element', () => {
    const textContent = 'textContent'

    render(<Heading level="h1">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 1 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders an h2 heading element explicitly', () => {
    const textContent = 'textContent'

    render(<Heading level="h2">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 2 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders an h3 heading element', () => {
    const textContent = 'textContent'

    render(<Heading level="h3">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 3 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders an h4 heading element', () => {
    const textContent = 'textContent'

    render(<Heading level="h4">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 4 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders an h5 heading element', () => {
    const textContent = 'textContent'

    render(<Heading level="h5">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 5 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders an h6 heading element', () => {
    const textContent = 'textContent'

    render(<Heading level="h6">{textContent}</Heading>)

    const heading = screen.getByRole('heading', { level: 6 })
    const content = screen.getByText(textContent)

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
