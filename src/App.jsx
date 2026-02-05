import HomePage from './pages/HomePage'
import RegisterPage from "./pages/RegisterPage"
import ProductListingPage from './pages/ProductListingPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import AdminDashboard from './admin/AdminDashboard'
import CreateProduct from "./admin/CreateProduct"
import UpdateProduct from "./admin/UpdateProduct"
import ProtectedRoute from './components/ProtectedRoute'
import ProductList from './admin/ProductList'
import Users from "./admin/Users"
import Orders from './admin/Orders'
import ShippingDetails from './pages/ShippingDetails'
import OrderSuccess from './pages/orderSuccess'
import OrderCancel from "./pages/OrderCancel"
import OrderPlaced from './pages/orderPlaced'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
          <Route path='create' element={<CreateProduct />} />
          <Route path='list' element={<ProductList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='users' element={<Users />} />
          <Route path='update/:id' element={<UpdateProduct />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<ProductListingPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/shipdetails' element={<ShippingDetails />} />
        <Route path='/success' element={<OrderSuccess />} />
        <Route path='/cancel' element={<OrderCancel />} />
        <Route path='/orderplaced' element={<OrderPlaced />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App