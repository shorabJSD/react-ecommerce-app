 import React from 'react'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import SingUp from './Pages/SingUp'
import AddCart from './Pages/AddCart'

import {BrowserRouter, Routes, Route,} from "react-router-dom"


 export default function App() {
   return (
     <div>
    <BrowserRouter>
    <Navbar shop="shop" men="men" women="women" kid="kids"/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="mens"/>}/>
        <Route path='/women' element={<ShopCategory category="womens"/>}/>
        <Route path='/kid' element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='::product' element={<Product/>}/>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/cart' element={<AddCart/>}/>
      </Routes>
    </BrowserRouter>
     </div>
   )
 }
 