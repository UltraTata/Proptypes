import '../CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home.js";
import FeatureSelection from "./FeatureSelection.js";
import MnH from "./MnH.js";
import About from "./About.js";
import Client from "./Client.js";
import Contact from "./Contact.js";
import Info from "./Info.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="hero_area">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Feature" element={<FeatureSelection/>} />
            <Route path="/MnH" element={<MnH/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Client" element={<Client/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
        <Info/>
        <Footer/>
      </div>
    </div>
  );
}