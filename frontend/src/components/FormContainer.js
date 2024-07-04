import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

/**
 * FormContainer component wraps its children in a responsive layout for forms.
 * It centers the content horizontally and limits the width of the form container
 * on medium and larger screens.
 *
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @returns {JSX.Element} The rendered FormContainer component.
 */
const FormContainer = ({ children }) => {
  return (
    <Container>
      {/* Row to center the content horizontally */}
      <Row className='justify-content-md-center'>
        {/* Column to limit the width of the form container */}
        <Col xs={12} md={6}>
          {/* Render the children inside the column */}
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
