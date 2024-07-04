import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  // Access the cart state from Redux store
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  // Redirect to shipping page if shipping address is not set
  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  // State for managing the selected payment method
  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  // Handler function for form submission
  const submitHandler = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    dispatch(savePaymentMethod(paymentMethod)) // Save the selected payment method to Redux store
    history.push('/placeorder') // Redirect to place order screen
  }

  return (
    <FormContainer>
      {/* Component for displaying checkout steps */}
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            {/* Radio button for PayPal or Credit Card */}
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked={paymentMethod === 'PayPal'} // Ensure the correct radio button is selected
              onChange={(e) => setPaymentMethod(e.target.value)} // Update payment method state
            ></Form.Check>
            {/* Uncomment if Stripe payment method is needed */}
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)} // Update payment method state
            ></Form.Check> */}
          </Col>
        </Form.Group>

        {/* Submit button for the form */}
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
