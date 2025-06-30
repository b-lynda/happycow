import datajson from "../assets/restaurants.json";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import next from "../assets/img/next-direction.svg";

const Home = () => {
  const data = datajson;

  const makingStars = (number) => {
    const starsTab = [];
    for (let i = 0; i < number; i++) {
      starsTab.push(<FaStar color="#FFC200" />);
    }
    return starsTab;
  };


  return (
    <section className="homeContainer">
      <div className="titleRestaurantsScroll">
        <h1>Restaurants autour de Paris</h1>
        <div>
          <Link to="/restaurants">
            Voir tous <img src={next} alt="" />
          </Link>
        </div>
      </div>
      <div className="scrollRestaurants">
        <div className="ficheRestaurantScroll">
          {data.map((element) => {
            return (
              <>
                <div className="ficheRestaurantStart">
                  <img src={element.thumbnail} alt="" />
                  <a href={element.link}>{element.name}</a>
                  <p className="address">{element.address}</p>
                  <div className="rateRestaurantFicheScroll">
                    <p>{makingStars(element.rating)}</p>
                  </div>
                  <div className="descRestaurantFicheScroll">
                    {element.description}
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
