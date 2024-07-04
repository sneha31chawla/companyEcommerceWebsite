import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * Meta component sets the meta tags for the HTML document head.
 * It uses `react-helmet` to manage changes to the document head.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.title='Welcome To ProShop'] - The title of the page.
 * @param {string} [props.description='We sell the best products for cheap'] - The meta description of the page.
 * @param {string} [props.keywords='electronics, buy electronics, cheap electronics'] - The meta keywords for the page.
 *
 * @returns {JSX.Element} The rendered Meta component.
 */
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

// Default props for the Meta component
Meta.defaultProps = {
  title: 'Welcome To ProShop',  // Default page title
  description: 'We sell the best products for cheap',  // Default meta description
  keywords: 'electronics, buy electronics, cheap electronics',  // Default meta keywords
}

export default Meta
