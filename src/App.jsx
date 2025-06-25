import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header visbile={openModal} setVisible={setOpenModal} />
        <Routes>

        </Routes>
        {openModal && <ModalLOg />}
      </Router>
    </>
  );
}

export default App;
