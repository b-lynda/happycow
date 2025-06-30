import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ModalLog from "./components/ModalLog";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import "./App.css";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Router>
        <Header openModal={openModal} setOpenModal={setOpenModal}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
        {openModal && <ModalLog closeModal={setOpenModal}/>}
      </Router>
    </>
  );
}

export default App;
