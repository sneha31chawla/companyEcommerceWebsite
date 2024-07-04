import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  // State variables for form inputs and error messages
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch()

  // Accessing userLogin state from Redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // Extract redirect path from location search, default to '/' if not present
  const redirect = location.search ? location.search.split('=')[1] : '/'

  // Redirect user if logged in
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault()
    
    // Simple client-side validation
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.')
    } else {
      setErrorMsg('') // Clear any previous error messages
      dispatch(login(email, password)) // Dispatch login action
    }
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      
      {/* Display error message from server or form validation */}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {errorMsg && <Message variant='danger'>{errorMsg}</Message>}
      
      {/* Login form */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby='emailHelp' // For additional context for screen readers
          />
          <Form.Text id='emailHelp' muted>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {/* Submit button */}
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
