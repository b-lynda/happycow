import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Router>
        <Header openModal={openModal} setOpenModal={setOpenModal}/>
        <Routes>

        </Routes>
        {openModal && <ModalLog closeModal={setOpenModal}/>}
      </Router>
    </>
  );
}

export default App;
