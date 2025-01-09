import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorPage from "./error-page";
import HomePage from './Pages/HomePage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
// import LoginPage from './componets/Testing/Test.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import BuildPage from './Pages/BuildPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ServicePage from "./Pages/ServicePage.jsx";
import ContectPage from './Pages/ContectPage';
import CategoryPage from "./Pages/CategoryPage.jsx";
import FavoritePage from "./Pages/FavoritePage.jsx";
import Pay from "./Pages/PaymentPage.jsx"

const App = () => (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContectPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="*" element={<ErrorPage />} /> {/* Catch all for errors */}
      </Routes>
    </Router>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
