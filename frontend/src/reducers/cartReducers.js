import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
} from '../constants/cartConstants'

/**
 * The cartReducer manages the state related to the shopping cart.
 * 
 * @param {Object} state - The current state of the cart.
 * @param {Object} action - The action dispatched to update the cart.
 * @returns {Object} - The new state of the cart.
 */
export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: '' }, // Initial state
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // Add or update an item in the cart
      const item = action.payload

      // Check if the item already exists in the cart
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        // Item exists, so update the item in the cart
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        // Item does not exist, so add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
      
    case CART_REMOVE_ITEM:
      // Remove an item from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
      
    case CART_SAVE_SHIPPING_ADDRESS:
      // Save the shipping address to the state
      return {
        ...state,
        shippingAddress: action.payload,
      }
      
    case CART_SAVE_PAYMENT_METHOD:
      // Save the payment method to the state
      return {
        ...state,
        paymentMethod: action.payload,
      }
      
    case CART_CLEAR_ITEMS:
      // Clear all items from the cart
      return {
        ...state,
        cartItems: [],
      }
      
    default:
      return state
  }
}
