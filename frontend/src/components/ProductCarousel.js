import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

/**
 * ProductCarousel component displays a carousel of top-rated products.
 * It fetches the top-rated products from the server and displays them in a carousel format.
 * If there is an error or the products are still loading, appropriate messages or loading indicators are shown.
 *
 * @returns {JSX.Element} The rendered ProductCarousel component.
 */
const ProductCarousel = () => {
  const dispatch = useDispatch()

  // Retrieve productTopRated state from Redux store
  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  // Fetch top-rated products when the component mounts
  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  // Render loading spinner if data is still being fetched
  if (loading) return <Loader />

  // Render error message if there was an issue fetching the products
  if (error) return <Message variant='danger'>{error}</Message>

  // Render the carousel if products have been successfully fetched
  return (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
