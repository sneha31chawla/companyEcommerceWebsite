import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Import route handlers
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

// Load environment variables from .env file
dotenv.config()

// Connect to the database
connectDB()

// Initialize Express application
const app = express()

// Setup logging middleware for development environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')) // Logs HTTP requests to the console
}

// Middleware to parse JSON bodies
app.use(express.json())

// Route handlers
app.use('/api/products', productRoutes) // Route for product-related operations
app.use('/api/users', userRoutes) // Route for user-related operations
app.use('/api/orders', orderRoutes) // Route for order-related operations
app.use('/api/upload', uploadRoutes) // Route for file uploads

// Route to get PayPal client ID from environment variables
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// Serve static files from the 'uploads' directory
const __dirname = path.resolve() // Resolve the directory name
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// Serve static files and frontend build in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the frontend build directory
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  // Handle all other routes and serve the frontend application
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  // Basic route to check if the API is running
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

// Middleware for handling 404 errors and other errors
app.use(notFound) // Middleware for handling 404 - Not Found errors
app.use(errorHandler) // Middleware for handling general errors

// Define the port and start the server
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
