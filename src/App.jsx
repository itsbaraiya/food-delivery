import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurMenu from './pages/OurMenu';
import Shop from './pages/Shop';
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>    
     <CartProvider> 
      <Router basename={import.meta.env.VITE_BASE_URL || "/"}>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<OurMenu/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>  
    </>
  )
}

export default App
