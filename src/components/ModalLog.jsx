// import { imgLogin } from "../assets/img/loginphoto.jpg";

const ModalLog = ({closeModal}) => {
  return (
    <section className="modalLog">
      <div className="modalContainer">
        <div className="modalDivLeft">
            {/* <img src={ imgLogin } alt="image de plats sur modal côté gauche"/> */}
          <p>Ici est ma partie gauche</p>
        </div>
        <div className="modalDivRight">
          <p>Ici est ma partie droite</p>
        </div>
       
      </div> <button onClick={() => {
        closeModal(false);
      }}> x </button>
    </section>
  );
};

export default ModalLog;
