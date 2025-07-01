import datajson from "../assets/restaurants.json";
import SearchBar from "../components/SearchBar";

const Restaurant = () => {
  const data = datajson;
  
  return (
    <section className="displayRestaurants">
      <div className="searchDivRestaurants">
        <SearchBar />
      </div>
  
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
        <div className="displayMap">map</div>
      </div>
    </section>
  );
};

export default Restaurant;
