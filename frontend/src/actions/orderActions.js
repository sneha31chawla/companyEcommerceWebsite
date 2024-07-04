import axios from 'axios'
import {
  CART_CLEAR_ITEMS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
} from '../constants/orderConstants'
import { logout } from './userActions'

// Action to create a new order
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // Make API request to create a new order
    const { data } = await axios.post(`/api/orders`, order, config)

    // Dispatch success action with order data
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })

    // Clear cart and remove items from localStorage
    dispatch({ type: CART_CLEAR_ITEMS })
    localStorage.removeItem('cartItems')
  } catch (error) {
    // Extract error message from response or use default message
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    // Log out user if the token is invalid
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }

    // Dispatch failure action with error message
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    })
  }
}

// Action to get details of a specific order
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // Make API request to fetch order details
    const { data } = await axios.get(`/api/orders/${id}`, config)

    // Dispatch success action with order data
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // Extract error message from response or use default message
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    // Log out user if the token is invalid
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }

    // Dispatch failure action with error message
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    })
  }
}

// Action to pay for an order
export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // Make API request to update order payment status
    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    )

    // Dispatch success action with payment data
    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // Extract error message from response or use default message
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    // Log out user if the token is invalid
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }

    // Dispatch failure action with error message
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message,
    })
  }
}

// Action to mark an order as delivered
export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // Make API request to update order delivery status
    const { data } = await axios.put(
      `/api/orders/${order._id}/deliver`,
      {},
      config
    )

    // Dispatch success action with delivery data
    dispatch({
      type: ORDER_DELIVER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // Extract error message from response or use default message
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    // Log out user if the token is invalid
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }

    // Dispatch failure action with error message
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload: message,
    })
  }
}

// Action to get the logged-in user's orders
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // Make API request to fetch logged-in user's orders
    const { data } = await axios.get(`/api/orders/myorders`, config)

    // Dispatch success action with orders data
    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // Extract error message from response or use default message
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    // Log out user if the token is invalid
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }

    // Dispatch failure action with error message
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message,
    })
  }
}

// Action to get all orders (admin only)
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // Make API request to fetch all orders
    const { data } = await axios.get(`/api/orders`, config)

    // Dispatch success action with orders data
    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // Extract error message from response or use default message
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    // Log out user if the token is invalid
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }

    // Dispatch failure action with error message
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: message,
    })
  }
}
