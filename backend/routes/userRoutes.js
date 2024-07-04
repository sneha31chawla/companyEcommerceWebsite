import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// Route for registering a new user
router.post('/', registerUser)

// Route for user login
router.post('/login', authUser)

// Route for admin to get all users
router.get('/', protect, admin, getUsers)

// Routes for managing the logged-in user's profile
router
  .route('/profile')
  .get(protect, getUserProfile)  // Get the profile of the logged-in user
  .put(protect, updateUserProfile) // Update the profile of the logged-in user

// Routes for admin to manage users by ID
router
  .route('/:id')
  .delete(protect, admin, deleteUser)  // Delete a user by ID
  .get(protect, admin, getUserById)    // Get a user by ID
  .put(protect, admin, updateUser)    // Update a user by ID

export default router
