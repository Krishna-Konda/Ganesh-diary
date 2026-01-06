import { Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";

//Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductPage from "./pages/Products";
import ContactPage from "./pages/Contact";
import AdminPage from "./pages/Admin";
import MilkCalculator from "./pages/MilkCalculator";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/MilkCalculator" element={<MilkCalculator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
