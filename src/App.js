
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/HomeBody';
import Login from './Components/Login/LoginBody';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/checkout';

import {CartProvider} from 'react-use-cart'


function  App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/login' element={<Login/>} />
          <Route  path='/contactus' element={<Contact/>} />
          <Route  path='/register' element={<Register/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  )
}

export default App;
