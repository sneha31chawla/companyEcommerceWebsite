import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

/**
 * Footer component renders the footer section of the application.
 * It includes a container with a row and a column displaying the copyright notice.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer>
      {/* Container for the footer content */}
      <Container>
        {/* Row to hold the footer content */}
        <Row>
          {/* Column with centered text for the copyright notice */}
          <Col className='text-center py-3'>
            Copyright &copy; ProShop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
