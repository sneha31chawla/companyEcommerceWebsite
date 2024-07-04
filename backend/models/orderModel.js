import mongoose from 'mongoose'

// Define the order schema
const orderSchema = mongoose.Schema(
  {
    // Reference to the user who placed the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // Array of ordered items
    orderItems: [
      {
        name: { type: String, required: true }, // Name of the product
        qty: { type: Number, required: true }, // Quantity ordered
        image: { type: String, required: true }, // Image URL of the product
        price: { type: Number, required: true }, // Price of the product
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product', // Reference to the Product model
        },
      },
    ],
    // Shipping address for the order
    shippingAddress: {
      address: { type: String, required: true }, // Street address
      city: { type: String, required: true }, // City
      postalCode: { type: String, required: true }, // Postal code
      country: { type: String, required: true }, // Country
    },
    // Payment method used for the order
    paymentMethod: {
      type: String,
      required: true,
    },
    // Payment result information (e.g., from a payment gateway)
    paymentResult: {
      id: { type: String }, // Payment ID
      status: { type: String }, // Payment status
      update_time: { type: String }, // Update time of the payment
      email_address: { type: String }, // Payer's email address
    },
    // Prices related to the order
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // Payment status of the order
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date, // Date when the order was paid
    },
    // Delivery status of the order
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date, // Date when the order was delivered
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
)

// Create the Order model using the order schema
const Order = mongoose.model('Order', orderSchema)

export default Order
