import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

/**
 * CheckoutSteps component displays a navigation bar for the checkout process.
 * It shows the steps in the checkout process and indicates which steps are completed.
 *
 * @param {Object} props - The props for the component.
 * @param {boolean} props.step1 - Indicates if the "Sign In" step is completed.
 * @param {boolean} props.step2 - Indicates if the "Shipping" step is completed.
 * @param {boolean} props.step3 - Indicates if the "Payment" step is completed.
 * @param {boolean} props.step4 - Indicates if the "Place Order" step is completed.
 * @returns {JSX.Element} The rendered component.
 */
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      {/* Sign In Step */}
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link className={step1 ? 'active' : ''}>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      {/* Shipping Step */}
      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className={step2 ? 'active' : ''}>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      {/* Payment Step */}
      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className={step3 ? 'active' : ''}>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      {/* Place Order Step */}
      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className={step4 ? 'active' : ''}>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

// Define prop types to validate the expected props
CheckoutSteps.propTypes = {
  step1: PropTypes.bool,  // Indicates if the "Sign In" step is completed
  step2: PropTypes.bool,  // Indicates if the "Shipping" step is completed
  step3: PropTypes.bool,  // Indicates if the "Payment" step is completed
  step4: PropTypes.bool,  // Indicates if the "Place Order" step is completed
}

export default CheckoutSteps
