import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

// Action to add an item to the cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    // Fetch product data from the server
    const { data } = await axios.get(`/api/products/${id}`)

    // Dispatch action to add the item to the cart
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    })

    // Save cart items to localStorage to persist cart state
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error adding item to cart:', error)
  }
}

// Action to remove an item from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
  // Dispatch action to remove the item from the cart
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  // Save updated cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// Action to save the shipping address
export const saveShippingAddress = (data) => (dispatch) => {
  // Dispatch action to save shipping address
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  // Save shipping address to localStorage
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

// Action to save the payment method
export const savePaymentMethod = (data) => (dispatch) => {
  // Dispatch action to save payment method
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  // Save payment method to localStorage
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
