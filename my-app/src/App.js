import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import NavBar from "./components/NavBar";
import TrainWithUsPage from "./components/TrainWithUs/TrainWithUs";
import SignUpForm from "./components/AuthLogSign/SignUpFrom";
import LoginForm from "./components/AuthLogSign/LogInForm";
import PaymentPage from "./components/PaymentPage/PaymentPage";

function App() {
  return (
    <Router>
      <NavBar /> {}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shopPage" element={<ShopPage />} />
        <Route path="/trainWithUs" element={<TrainWithUsPage />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/payment/:plan" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
