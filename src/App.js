import { Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";

//Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
