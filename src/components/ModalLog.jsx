// import { img } from "../assets/img/loginphoto.png";

const ModalLog = () => {
  return (
    <section className="modalLog">
      <div className="modalContainer">
        <div className="modalDivLeft">
            {/* <img src="" alt="image de plats sur modal côté gauche"/> */}
          <p>Ici est ma partie gauche</p>
        </div>
        <div className="modalDivRight">
          <p>Ici est ma partie droite</p>
        </div>
       
      </div> <button> x </button>
    </section>
  );
};

export default ModalLog;
