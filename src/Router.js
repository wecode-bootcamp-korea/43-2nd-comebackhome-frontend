import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Signin from './pages/SignIn/Signin';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import HomepartyList from './pages/HomepartyList/HomepartyList';
import Redirect from './pages/SignIn/Redirect';
import HomepartyDetail from './pages/HomepartyDetail/HomepartyDetail';

import ProductList from './pages/ProductList/ProductList';
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/homepartylist" element={<HomepartyList />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="auth/kakao/callback" element={<Redirect />} />
        <Route path="/homepartydetail" element={<HomepartyDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
