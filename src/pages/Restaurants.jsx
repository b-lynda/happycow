import datajson from "../assets/restaurants.json";
import SearchBar from "../components/SearchBar";

const Restaurant = () => {
  const data = datajson;

  return (
    <section className="displayRestaurants">
      <div className="searchDivRestaurants">
        <SearchBar />
      </div>

  
      
          <div className="displayCards">
            {data.map((element) => {
              return (
                <>
                  <div className="infoDisplayCard">
                    <div>
                      <img src={element.thumbnail} alt="" />
                    </div>
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
     
     
    </section>
  );
};

export default Restaurant;
