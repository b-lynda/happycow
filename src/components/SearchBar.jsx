import datajson from "../assets/restaurants.json";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const data = datajson;
  const [datas, setDatas] = useState([]);
  const [displayKeyWord, setDisplayKeyWord] = useState(false);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  useEffect(() => {
    setDatas(datajson);
  }, []);
  //   console.log(datas);

  const handleSearch = (element) => {
    const value = element.target.value;
    setSearchKeyWord(value);
  };
  //   console.log(searchKeyWord);

  return (
    <section className="sectionSearchBar">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Rechercher  ..."
          className=""
          onChange={handleSearch}
          onClick={() => {
            setDisplayKeyWord(true);
          }}
        />
        <button type="submit" name="searchBar" id="searchBar">
          GO
        </button>
      </div>
      {searchKeyWord && (
        <div className="resultsSearchBar">
          {datas
            .filter((element) => {
              return element.name
                .toLowerCase()
                .includes(searchKeyWord.toLowerCase());
            })
            .map((element, index) => {
              return (
                <a key={index} href={element.link}>
                  {element.name}
                </a>
              );
            })}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
