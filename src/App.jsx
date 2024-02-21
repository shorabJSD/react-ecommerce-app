 import React from 'react'
import NavBar from './Components/NavBar'
import Shops from './Pages/Shops'
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';

import {BrowserRouter, Routes, Route,} from "react-router-dom";


 export default function App() {
   return (
     <div>
    <BrowserRouter basename="/app">
    <NavBar shop="shop" men="men" women="women" kid="kids"/>
      <Routes>
        <Route path="/"  element={<Shops/>}/>
          <Route path="/men"  element={<Men/>}/>
          <Route path="/women"  element={<Women/>}/>
          <Route path="/kid"  element={<Kids/>}/>
      </Routes>
    </BrowserRouter>
     </div>
   )
 }
 