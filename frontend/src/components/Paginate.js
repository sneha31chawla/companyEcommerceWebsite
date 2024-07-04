import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

/**
 * Paginate component renders pagination controls to navigate through pages.
 * It displays a list of pagination items based on the total number of pages.
 *
 * @param {Object} props - The component's props.
 * @param {number} props.pages - The total number of pages.
 * @param {number} props.page - The current page number.
 * @param {boolean} [props.isAdmin=false] - A flag indicating whether the user is an admin. If true, admin-specific pagination URLs are used.
 * @param {string} [props.keyword=''] - The search keyword for pagination in search results. Used to construct the URL if provided.
 *
 * @returns {JSX.Element} The rendered Paginate component.
 */
const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {/* Create an array of page numbers and map them to Pagination.Item components */}
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`  // URL for search results pagination
                  : `/page/${x + 1}`  // URL for general pagination
                : `/admin/productlist/${x + 1}`  // URL for admin product list pagination
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
