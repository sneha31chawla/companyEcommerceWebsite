import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts)

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Admin
router.route('/').post(protect, admin, createProduct)

// @desc    Create a new review for a product
// @route   POST /api/products/:id/reviews
// @access  Private
router.route('/:id/reviews').post(protect, createProductReview)

// @desc    Get top-rated products
// @route   GET /api/products/top
// @access  Public
router.get('/top', getTopProducts)

// @desc    Get a product by ID
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductById)

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
router.route('/:id').delete(protect, admin, deleteProduct)

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
router.route('/:id').put(protect, admin, updateProduct)

export default router
