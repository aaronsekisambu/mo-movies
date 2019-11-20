import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../redux/action-creators";
import { Movies } from "./Movies";

const Support = props => {
  useEffect(() => {
    const {
      match: {
        params: { username }
      },
      getMovies
    } = props;
    getMovies(username);
  }, []);
  const { movies, history } = props;
  if (movies === undefined) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="content-container">
      <div className="language-content">
        <div className="language-categories">
          <span className="categories-title">
            Select your preferred language type
          </span>
          <Movies movies={movies} history={history} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (state.movies.movies === undefined) {
    const { history } = ownProps;
    history.push("/");
    return {};
  }
  return {
    movies: state.movies.movies.movie
  };
};

export default connect(mapStateToProps, { getMovies })(Support);
