// Import necessary modules
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// Middleware to protect routes and ensure the user is authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token

  // Check if the request has an authorization header and if it starts with 'Bearer'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token from the authorization header
      token = req.headers.authorization.split(' ')[1]

      // Verify the token using the JWT_SECRET environment variable
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Find the user by ID from the decoded token and exclude the password field
      req.user = await User.findById(decoded.id).select('-password')

      // Proceed to the next middleware or route handler
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  // If no token is found, return a 401 Unauthorized error
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

// Middleware to check if the user has admin privileges
const admin = (req, res, next) => {
  // Check if the user is authenticated and is an admin
  if (req.user && req.user.isAdmin) {
    // Proceed to the next middleware or route handler
    next()
  } else {
    // If the user is not an admin, return a 401 Unauthorized error
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

// Export the middleware functions
export { protect, admin }
