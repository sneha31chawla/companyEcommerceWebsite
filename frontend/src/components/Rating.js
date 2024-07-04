import React from 'react'

/**
 * Rating component displays a rating system with star icons.
 * It takes a value representing the rating, optional text, and color for the stars.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.value - The rating value (between 0 and 5).
 * @param {string} [props.text] - Optional text to display alongside the rating.
 * @param {string} [props.color='#f8e825'] - Color for the star icons (default is yellow).
 * @returns {JSX.Element} The rendered Rating component.
 */
const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {/* Render five star icons based on the rating value */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      {/* Conditionally render the text if provided */}
      <span>{text && text}</span>
    </div>
  )
}

// Default props for the Rating component
Rating.defaultProps = {
  color: '#f8e825', // Default color for stars (yellow)
}

export default Rating
