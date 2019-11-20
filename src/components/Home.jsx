import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import image1 from "../assets/images/maxresdefault.jpg";
import image2 from "../assets/images/movie1.jpeg";
import image3 from "../assets/images/movie2.jpeg";
import { Avatar } from "./Avatar";

const Home = props => {
  const { profile, movies, watched } = props;
  const switchLogin = (profile, movies, watched) => {
    if ((movies || profile || watched) === undefined) {
      return (
        <div className="login-getStarted">
          <ul>
            <li className="login">
              <NavLink exact to="/login">
                Login
              </NavLink>
            </li>
            <li className="get-started">
              <NavLink exact to="/getStarted">
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <section className="user-profile">
        <Avatar profile={profile} watched={watched} />
      </section>
    );
  };
  return (
    <div className="content-container">
      <div className="home-content dashboard-content">
        {switchLogin(profile, movies, watched)}
        <div className="welcome">
          <h3>
            Welcome to <span>Mo.Movies</span>
          </h3>
          <p>Rent, Sell and Watch the latest movies here</p>
        </div>
        <div className="categories">
          <span className="categories-title">Select a Category</span>
          <ul>
            <li>
              <div className="category-images">
                <span>Action</span>
                <img src={image1} alt="" />
                <button className="overlay-category">
                  <i className="zmdi zmdi-play-circle zmdi-hc-2x"></i>
                </button>
              </div>
            </li>
            <li>
              <div className="category-images">
                <span>Tv Shows</span>
                <img src={image2} alt="" />
                <button className="overlay-category">
                  <i className="zmdi zmdi-play-circle zmdi-hc-2x"></i>
                </button>
              </div>
            </li>
            <li>
              <div className="category-images">
                <span>Animation</span>
                <img src={image3} alt="" />
                <button className="overlay-category">
                  <i className="zmdi zmdi-play-circle zmdi-hc-2x"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  if (state.users.users === undefined) {
    return {};
  }
  if (state.movies.movies === undefined) {
    return {};
  }
  if (state.movies.watched === undefined) {
    return {};
  }
  return {
    profile: state.users.users.user,
    movies: state.movies.movies.movie,
    watched: state.movies.watched.watched
  };
};
export default connect(mapStateToProps, {})(Home);
