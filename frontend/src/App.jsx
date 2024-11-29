import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import { Route, Routes } from 'react-router-dom';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/myOrders/MyOrders';

import './App.css';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false)


  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>

      </div>
      <Footer />
    </div>



  )
}

export default App;
