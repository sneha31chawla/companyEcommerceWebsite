import mongoose from 'mongoose'

// Define the schema for reviews
const reviewSchema = mongoose.Schema(
  {
    // Name of the reviewer
    name: { type: String, required: true },
    // Rating given by the reviewer
    rating: { type: Number, required: true },
    // Comment provided by the reviewer
    comment: { type: String, required: true },
    // Reference to the user who wrote the review
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
)

// Define the schema for products
const productSchema = mongoose.Schema(
  {
    // Reference to the user who added the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // Name of the product
    name: {
      type: String,
      required: true,
    },
    // Image URL of the product
    image: {
      type: String,
      required: true,
    },
    // Brand of the product
    brand: {
      type: String,
      required: true,
    },
    // Category of the product
    category: {
      type: String,
      required: true,
    },
    // Description of the product
    description: {
      type: String,
      required: true,
    },
    // Array of reviews for the product
    reviews: [reviewSchema],
    // Average rating of the product
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    // Number of reviews for the product
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    // Price of the product
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    // Stock count of the product
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
)

// Create the Product model using the product schema
const Product = mongoose.model('Product', productSchema)

export default Product
