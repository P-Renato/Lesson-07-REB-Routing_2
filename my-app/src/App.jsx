import './App.css'
import Layout from './Layout';
import Home from './views/Home';
import Products from './views/Products'
import About from "./views/About";
import Contacts from "./views/Contacts";
import Product from './views/Product'
import {Routes, Route, Navigate } from 'react-router-dom';
import Profile from './views/Proile';

let loggedIn = true 
function App() {
  
  return (
    <div>
      {/* <Products /> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='profile' element={ loggedIn? <Profile /> : <Navigate to="/"/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
