import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

/**
 * Product component displays a single product's details in a card format.
 * It includes a product image, name, rating, number of reviews, and price.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.product - The product object containing details to display.
 * @param {string} props.product._id - The unique identifier of the product.
 * @param {string} props.product.image - The URL of the product's image.
 * @param {string} props.product.name - The name of the product.
 * @param {number} props.product.rating - The rating of the product.
 * @param {number} props.product.numReviews - The number of reviews for the product.
 * @param {number} props.product.price - The price of the product.
 *
 * @returns {JSX.Element} The rendered Product component.
 */
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      {/* Link to product details page */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        {/* Link to product details page */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* Product rating and review count */}
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        {/* Product price */}
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
