import datajson from "../assets/restaurants.json";
import SearchBar from "../components/SearchBar";
import { FaStar } from "react-icons/fa";

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
 
      <div className="searchDivRestaurants">
        <SearchBar />
      </div>
      <div className="titleRestaurantsScroll">
        <h1>Restaurants autour de Paris</h1>
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
