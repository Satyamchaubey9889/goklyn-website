import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from './pages/HomePage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FaqPage from './pages/FaqPage';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/TeamPage';
import ContactUsPage from './pages/ContactUsPage';
import ScrollTop from './components/ScrollTop/ScrollTop';
import CareerPage from './pages/CareerPage';
import BlogList from './components/Blog/BlogList';
import BlogDetail from './components/Blog/BlogDetail';

const AppWrapper = () => {
  const location = useLocation();

  const pageClasses = {
    "/": "banner-section-outer",
    "/about-us": "sub-banner-section-outer",
    "/services": "sub-banner-section-outer services-banner-section-outer",
    "/faqs": "sub-banner-section-outer",
    "/portfolio": "sub-banner-section-outer services-banner-section-outer",
    "/our-team": "sub-banner-section-outer",
    "/contact-us": "sub-banner-section-outer contact-banner-section-outer",
    "/career": "sub-banner-section-outer contact-banner-section-outer"
  };

  const containerClass = pageClasses[location.pathname] || "banner-section-outer";


  const isHome = location.pathname === "/";

  return (
    <div
      className={`${containerClass} position-relative`}
      style={isHome ? { background: "#04060f", minHeight: "100vh" } : {}}
    >
      <ScrollTop>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/faqs' element={<FaqPage />} />
          <Route path='/portfolio' element={<ProjectPage />} />
          <Route path='/our-team' element={<TeamPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </ScrollTop>
    </div>

  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
};

export default App;
