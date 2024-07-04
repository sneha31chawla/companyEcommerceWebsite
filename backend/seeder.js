import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

// Load environment variables from .env file
dotenv.config()

// Connect to the database
connectDB()

// Function to import sample data into the database
const importData = async () => {
  try {
    // Delete existing data from Orders, Products, and Users collections
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Insert sample users into the Users collection
    const createdUsers = await User.insertMany(users)

    // Get the ID of the admin user (first user in the array)
    const adminUser = createdUsers[0]._id

    // Map sample products to include the admin user as the product owner
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    // Insert sample products into the Products collection
    await Product.insertMany(sampleProducts)

    // Log success message and exit the process
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    // Log any errors that occur and exit with a failure code
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Function to destroy all data in the database
const destroyData = async () => {
  try {
    // Delete all data from Orders, Products, and Users collections
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Log success message and exit the process
    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    // Log any errors that occur and exit with a failure code
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Check command-line arguments to determine whether to import or destroy data
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
