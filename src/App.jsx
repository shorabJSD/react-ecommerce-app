import React from "react";
import Navbar from "./Components/NavBar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import SingUp from "./Pages/SingUp";
import AddCart from "./Pages/AddCart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ShopContextProvider from "./Context/ShopContext";
import kids_banner from './Components/assets/banner_kids.png'
import mens_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
export default function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar shop="shop" men="men" women="women" kid="kids" login="Login"/>
          <Routes>
            <Route  path="/" element={<Shop/>} />
            <Route  path="/men" element={<ShopCategory banner={mens_banner} category="men" />} />
            <Route  path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route  path="/kid" element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route  path="/product" element={<Product/>}>
              <Route  path=":productID" element={<Product/>} />
            </Route>
            <Route  path="/login" element={<SingUp/>} />
            <Route  path="/cart" element={<AddCart/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}
