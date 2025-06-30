import datajson from "../assets/restaurants.json";
import SearchBar from "../components/SearchBar";
import { FaStar } from "react-icons/fa";

const Restaurant = () => {
  const data = datajson;
  // fonction me permettant de générer des notes avec étoile :
  const makingStars = (number) => {
    // création d'un tableau vide
    const starsTab = [];
    // boucle sur le param envoyer dans le tableau
    for (let i = 0; i < number; i++) {
      starsTab.push(<FaStar color="#FFC200" />);
    }
    return starsTab;
  };
  return (
    <section className="displayRestaurants">
      <div className="searchDivRestaurants">
        <SearchBar />
      </div>
    <div className="pagination">pages</div>
      <div className="displayRestaurantsMap">
        
        <div className="displayAllRestaurants">
          <div className="displayRestaurantCard">
            <div className="displayCards">
              {data.map((element) => {
                return (
                  <>
                    <div>
                      <img src={element.thumbnail} alt="" />
                    </div>
                    <div className="infoDisplayCard">
                      <a href={element.link} className="titleLinkName">
                        {element.name}
                      </a>
                      <p className="addressCard">{element.address}</p>
                      <p>Score : {element.rating}/5</p>
                      <p>{element.phone}</p>
                      <a href={element.website}>{element.website}</a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="displayMap"></div>
      </div>
    </section>
  );
};

export default Restaurant;
