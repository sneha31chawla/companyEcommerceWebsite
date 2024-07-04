import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

/**
 * SearchBox component provides a search form for users to input and submit search queries.
 * It uses React state to manage the search keyword and handles form submission to redirect
 * to the search results page or the home page based on whether the keyword is provided.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.history - The history object from React Router for navigation.
 * @returns {JSX.Element} The rendered SearchBox component.
 */
const SearchBox = ({ history }) => {
  // State to hold the search keyword
  const [keyword, setKeyword] = useState('')

  /**
   * Handles form submission by navigating to the search results page if a keyword is provided.
   * If the keyword is empty, it redirects to the home page.
   *
   * @param {Object} e - The event object from form submission.
   */
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        value={keyword} // Ensure the input value is controlled
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
