
import './App.css';
import NavBar from "./components/NavBar"
import ProductsPage from './components/products/ProductsPage';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './components/authentication/SignInPage';
import SignUpPage from './components/authentication/SignUpPage';
import SignUpNextPage from './components/authentication/SignUpNextPage';
import Cart from './components/cart/Cart';
import Profile from './components/user/Profile';
import ProductDetailPage from './components/products/ProductDetailPage';
import User from './components/user/User';
import Order from './components/user/Order';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* public routes */}
          <Route path='/' element={<ProductsPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product-detail' element={<ProductDetailPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signupnext' element={<SignUpNextPage />} />
          <Route path='/cart' element={<Cart />} />
          
          {/* Private routes  */}
          <Route path='/user' element={<User />}>
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/user/orders' element={<Order />} />
          </Route>

         
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
