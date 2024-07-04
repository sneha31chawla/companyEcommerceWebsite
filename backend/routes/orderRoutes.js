import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private
router.route('/').post(protect, addOrderItems)

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
router.route('/').get(protect, admin, getOrders)

// @desc    Get orders for the logged-in user
// @route   GET /api/orders/myorders
// @access  Private
router.route('/myorders').get(protect, getMyOrders)

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route('/:id').get(protect, getOrderById)

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
router.route('/:id/pay').put(protect, updateOrderToPaid)

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
