
import './App.css';
import NavBar from "./components/NavBar"
import ProductsPage from './components/products/ProductsPage';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './components/authentication/SignInPage';
import SignUpPage from './components/authentication/SignUpPage';
import SignUpNextPage from './components/authentication/SignUpNextPage';
import Cart from './components/cart/Cart';
import Profile from './components/authentication/Profile/Profile';
import ProductDetailPage from './components/products/ProductDetailPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductsPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product-detail' element={<ProductDetailPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signupnext' element={<SignUpNextPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
