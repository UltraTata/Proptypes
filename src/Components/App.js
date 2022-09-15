import '../CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home.js";
import FeatureSelection from "./FeatureSelection.js";
import DiscountSelection from "./DiscountSelection.js";
import MnH from "./MnH.js";
import About from "./About.js";
import Client from "./Client.js";
import Contact from "./Contact.js";
import Info from "./Info.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Feature" element={<FeatureSelection/>} />
          <Route path="/Discount" element={<DiscountSelection/>} />
          <Route path="/MnH" element={<MnH/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Client" element={<Client/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Info/>
      <Footer/>
    </>
  );
}