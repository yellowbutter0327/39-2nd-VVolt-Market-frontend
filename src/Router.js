import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SideBar from './components/SideBar/SideBar';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import Payment from './pages/Payment/Payment';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import ProductRegister from './pages/ProductRegister/ProductRegister';
import Signup from './pages/Signup/Signup';
import Store from './pages/Store/Store';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <SideBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productregister" element={<ProductRegister />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
