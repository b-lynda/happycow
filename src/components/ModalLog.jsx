import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { FaRegCircleXmark } from "react-icons/fa6";

const ModalLog = ({ closeModal }) => {
  const [displayLogJoin, setDisplayLogJoin] = useState(true);
  return (
    <section className="modalLog">
      <div className="modalContainer">
        <div className="modalDivLeft">
          <h1>Happy Cook</h1>
          <p>
            {displayLogJoin
              ? "Welcome to HappyCow!"
              : "Join the largest vegan and vegetarian community in the world."}
          </p>
        </div>
        <div className="modalDivRight">
          <div className="navModal">
            <a
              onClick={() => {
                setDisplayLogJoin(true);
              }}
            >
              Login
            </a>
            <a
              onClick={() => {
                setDisplayLogJoin(false);
              }}
            >
              Signin
            </a>
          </div>
          <div className="containRightModal">
            {displayLogJoin ? <Login /> : <Signup />}
          </div>
        </div>
        <FaRegCircleXmark
          className="buttonClose"
          onClick={() => {
            closeModal(false);
          }}
        />
      </div>
    </section>
  );
};

export default ModalLog;
