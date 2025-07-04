import datajson  from "../assets/restaurants.json";
import { useState } from "react";

const Pagination = () => {
  const data = datajson;
  const totalPages = [];
  totalPages.push(data.slice(0,15));
  const [page, setPage] = useState(0);
  return (
    <div className="pagination">
      {totalPages > 0 &&
        data.map((element, index) => {
          <>
            {page >= 1 ? (
              <button
                key={index}
                onClick={() => {
                  setPage(-1);
                }}
              >
                {index - 1}
              </button>
            ) : (
              <button
                key={index}
                onClick={() => {
                  setPage(-1);
                }}
              >
                {index + 1}
              </button>
            )}

            <p key={index}></p>
          </>;
        })}
    </div>
  );
};

export default Pagination;
