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

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path='/admin/create' element={<ProtectedRoute><CreateProduct /></ProtectedRoute>} />
        <Route path='/admin/update/:id' element={<ProtectedRoute><UpdateProduct /></ProtectedRoute>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<ProductListingPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App