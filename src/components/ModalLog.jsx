import { FaRegCircleXmark } from "react-icons/fa6";

const ModalLog = ({ closeModal }) => {
  return (
    <section className="modalLog">
      <div className="modalContainer">
        <div className="modalDivLeft">
          <h1>Happy Cook</h1>
          <p>Welcome to HappyCow!</p>
        </div>
        <div className="modalDivRight">
          <h1>Happy Cook</h1>
          <p>Welcome to HappyCow!</p>
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
