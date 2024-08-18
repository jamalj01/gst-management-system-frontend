import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/adminPersona/Dashboard';
import CreateCategory from './pages/adminPersona/CreateCategory';
import CreateProduct from './pages/adminPersona/CreateProduct';
import RecordSale from './pages/adminPersona/RecordSale';
import SalesSummary from './pages/adminPersona/SalesSummary';
import ProductTile from './pages/userPersona/ProductTile';
import './App.css';
import GenerateBill from './pages/userPersona/GenerateBill';


function App() {
    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/product-page" element={<ProductTile />} />
                    <Route path="/generate-bill" element={<GenerateBill />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/create-category" element={<CreateCategory />} />
                    <Route path="/create-product" element={<CreateProduct />} />
                    <Route path="/record-sale" element={<RecordSale />} />
                    <Route path="/sales-summary" element={<SalesSummary />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
