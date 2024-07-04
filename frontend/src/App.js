import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {
  return (
    <Router>
      {/* Header component displayed on every page */}
      <Header />

      <main className='py-3'>
        <Container>
          {/* Route to display order details based on order ID */}
          <Route path='/order/:id' component={OrderScreen} />
          
          {/* Route for shipping information form */}
          <Route path='/shipping' component={ShippingScreen} />
          
          {/* Route for payment information form */}
          <Route path='/payment' component={PaymentScreen} />
          
          {/* Route for placing the order */}
          <Route path='/placeorder' component={PlaceOrderScreen} />
          
          {/* Route for user login */}
          <Route path='/login' component={LoginScreen} />
          
          {/* Route for user registration */}
          <Route path='/register' component={RegisterScreen} />
          
          {/* Route for user profile page */}
          <Route path='/profile' component={ProfileScreen} />
          
          {/* Route to view a specific product based on product ID */}
          <Route path='/product/:id' component={ProductScreen} />
          
          {/* Route for the shopping cart; includes optional product ID */}
          <Route path='/cart/:id?' component={CartScreen} />
          
          {/* Admin routes */}
          
          {/* Route to display list of all users */}
          <Route path='/admin/userlist' component={UserListScreen} />
          
          {/* Route to edit user details based on user ID */}
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          
          {/* Route to display list of all products; supports pagination */}
          <Route path='/admin/productlist' component={ProductListScreen} exact />
          <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
          
          {/* Route to edit product details based on product ID */}
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          
          {/* Route to display list of all orders */}
          <Route path='/admin/orderlist' component={OrderListScreen} />
          
          {/* Search and pagination routes for the home screen */}
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
          
          {/* Default route to display the home screen */}
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>

      {/* Footer component displayed on every page */}
      <Footer />
    </Router>
  )
}

export default App
