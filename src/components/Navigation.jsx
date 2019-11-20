import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = props => {
  const { profile } = props;
  const switchHome = (profile, lost, name) => {
    if (profile === undefined) {
      return `/${lost}`;
    }
    return `/${name}/${profile.username}`;
  };
  return (
    <div className="side-navigation">
      <ul>
        <li>
          <NavLink exact to="/">
            <span className="tooltip">Home</span>
            <i className="zmdi zmdi-home zmdi-hc-2x"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={switchHome(profile, 'lost/dash', 'dashboard')}>
            <span className="tooltip">Dashboard</span>
            <i className="zmdi zmdi-view-dashboard zmdi-hc-2x"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={switchHome(profile, 'lost', 'support')}>
            <span className="tooltip">Support</span>
            <i className="zmdi zmdi-phone-forwarded zmdi-hc-2x"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            <span className="tooltip">About</span>
            <i className="zmdi zmdi-alert-circle zmdi-hc-2x"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  if (
    (state.users.users || state.movies.movies || state.movies.watched) ===
    undefined
  ) {
    return {};
  }
  return {
    profile: state.users.users.user
  };
};
export default connect(mapStateToProps, {})(Navigation);
