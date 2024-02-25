 import React from 'react'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import SingUp from './Pages/SingUp'
import AddCart from './Pages/AddCart'

import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import kids_banner from './Components/assets/banner_kids.png'
import womens_banner from './Components/assets/banner_women.png'
import men_banner from './Components/assets/banner_mens.png'




export default function App() {
   return (
     <div>
    <BrowserRouter>
    <Navbar shop="shop" men="men" women="women" kid="kids"/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory  banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={womens_banner}  category="women"/>}/>
        <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='::product' element={<Product/>}/> 
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/cart' element={<AddCart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
     </div>
   )
 }
 