import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// Define the schema for users
const userSchema = mongoose.Schema(
  {
    // User's name
    name: {
      type: String,
      required: true,
    },
    // User's email, must be unique
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // User's hashed password
    password: {
      type: String,
      required: true,
    },
    // Boolean to indicate if the user is an admin
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
)

// Method to compare the entered password with the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Pre-save hook to hash the password before saving the user document
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    // If the password hasn't been modified, skip hashing
    next()
  } else {
    // Hash the new password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
})

// Create the User model using the user schema
const User = mongoose.model('User', userSchema)

export default User
