import React from "react";
import { connect } from "react-redux";
import { Movies } from "./Movies";
import { Avatar } from "./Avatar";

const Dashboard = props => {
  const { profile, movies, watched, history } = props;
  if (movies === undefined) {
    return <p>Loading ...</p>;
  }
  if (profile === undefined || movies === undefined) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="content-container">
      <div className="dashboard-content">
        <section className="user-profile">
          <Avatar profile={profile} watched={watched} />
        </section>
        <section className="history">
          <div className="history-container">
            <div className="language-content">
              <div className="language-categories">
                <span className="categories-title">My Movies</span>
                <Movies movies={movies} history={history} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (state.movies.movies === undefined) {
    const { history } = ownProps;
    history.push("/login");
    return {};
  }
  return {
    profile: state.users.users.user,
    movies: state.movies.movies.movie,
    watched: state.movies.watched.watched
  };
};
export default connect(mapStateToProps, {})(Dashboard);
