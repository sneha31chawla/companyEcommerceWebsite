// Middleware to handle 404 Not Found errors
const notFound = (req, res, next) => {
  // Create a new error with the message including the requested URL
  const error = new Error(`Not Found - ${req.originalUrl}`)
  
  // Set the response status to 404 (Not Found)
  res.status(404)
  
  // Pass the error to the next middleware (error handler)
  next(error)
}

// Middleware to handle general errors
const errorHandler = (err, req, res, next) => {
  // Determine the status code: use 500 (Internal Server Error) if status code is 200 (OK)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  
  // Set the response status to the determined status code
  res.status(statusCode)
  
  // Send a JSON response with the error message and stack trace (if not in production)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

// Export the middleware functions
export { notFound, errorHandler }
