import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import App, { LocationDisplay } from './App'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  // verify page content for expected route
  expect(screen.getByText(/Trending Repositories/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Developers/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/Trending Developers/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory()
  const route = '/developers'
  history.push(route)
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>,
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})