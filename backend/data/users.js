// Import bcryptjs for password hashing
import bcrypt from 'bcryptjs'

// Array of user objects
const users = [
  {
    name: 'Admin User', // Admin user's name
    email: 'admin@example.com', // Admin user's email
    password: bcrypt.hashSync('123456', 10), // Admin user's hashed password
    isAdmin: true, // Indicates if the user is an admin
  },
  {
    name: 'John Doe', // Regular user's name
    email: 'john@example.com', // Regular user's email
    password: bcrypt.hashSync('123456', 10), // Regular user's hashed password
  },
  {
    name: 'Jane Doe', // Regular user's name
    email: 'jane@example.com', // Regular user's email
    password: bcrypt.hashSync('123456', 10), // Regular user's hashed password
  },
]

// Export the users array
export default users
