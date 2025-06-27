import datajson from "../assets/restaurants.json";
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";


const Home = () => {
  const data = datajson;

  return (
    <section className="homeContainer">
      <div className="titleRestaurantsScroll">
        <h1>Restaurants autour de Paris</h1>
        <a href="#">Voir tous <MdNavigateNext fontSize="25px" /></a>
      </div>
      <div className="scrollRestaurants">
        <div className="ficheRestaurantScroll">
          {data.map((element, index) => {
            return (
              <>
                <div className="ficheRestaurantStart">
                  <img key={element.placeId} src={element.thumbnail} alt="" />
                  <a key={element.placeId} href={element.link}>
                    {element.name}
                  </a>
                  <p className="address" key={element.placeId}>
                    {element.address}
                  </p>
                  <div className="rateRestaurantFicheScroll">
                    <i></i>
                  </div>
                  <div className="descRestaurantFicheScroll">
                    <p>{element.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
