import React from "react";

export const Movies = ({ movies, history }) => {
  const { location } = history;
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <div className="language-category-images">
            <span>
              {location.pathname.includes("support")
                ? movie.language
                : movie.movieName}
            </span>
            <img src={movie.movieAvatar} alt="" />
            <button className="language-overlay-category">
              <i className="zmdi zmdi-play-circle zmdi-hc-2x"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
