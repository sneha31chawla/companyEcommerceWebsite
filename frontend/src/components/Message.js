import React from 'react'
import { Alert } from 'react-bootstrap'

/**
 * Message component displays an alert message with a customizable variant.
 * It uses React-Bootstrap's `Alert` component to show different types of messages.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.variant='info'] - The variant of the alert (e.g., 'success', 'danger').
 * @param {React.ReactNode} props.children - The content to be displayed inside the alert.
 *
 * @returns {JSX.Element} The rendered Message component.
 */
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

// Default props for the Message component
Message.defaultProps = {
  variant: 'info',  // Default variant is 'info'
}

export default Message
