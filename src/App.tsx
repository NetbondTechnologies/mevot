import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import TermsConditions from "./components/TermsConditions";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            <Route path="/" element={<><Homepage/> <Footer/></>} />
            <Route path="/terms-and-conditions" element={<><TermsConditions/> <Footer/></>} />
            <Route path="/contact" element={<><Contact/> <Footer/></>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
