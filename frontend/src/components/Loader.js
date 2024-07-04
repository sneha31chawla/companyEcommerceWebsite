import React from 'react'
import { Spinner } from 'react-bootstrap'

/**
 * Loader component displays a spinner to indicate loading state.
 * It provides visual feedback to users while content is being fetched or processed.
 *
 * @returns {JSX.Element} The rendered Loader component.
 */
const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',        // Set the width of the spinner
        height: '100px',       // Set the height of the spinner
        margin: 'auto',        // Center the spinner horizontally
        display: 'block',      // Ensure the spinner is displayed as a block element
      }}
    >
      <span className='sr-only'>Loading...</span> {/* Screen reader text for accessibility */}
    </Spinner>
  )
}

export default Loader
