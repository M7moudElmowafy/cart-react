import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Register from './component/Register';
import Login from './component/Login';
import ContactPage from './component/ContactPage';
import AboutPage from './component/AboutPage';
import Cart from './component/Cart';
import Checkout from './component/Checkout';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/products/:id" element={<Product/>} />
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </>
  );
}

export default App;
