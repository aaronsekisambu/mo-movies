import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";
import {
  getUsers,
  getMovies,
  login,
  getMoviesWatched
} from "../redux/action-creators";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
  }
  notifyBase = () => toast.info("Please insert email or password");
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    if (email === "" || password === "") {
      return this.notifyBase();
    }
    await login({ email, password });
    const {
      users: { users },
      getMovies,
      getUsers,
      getMoviesWatched
    } = this.props;
    if (users.status === 200) {
      await getMovies(users.username);
      await getUsers(users.username);
      await getMoviesWatched(users.username);
      history.push(`/dashboard/${users.username}`);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="content-container">
        <div className="getStarted-content " style={{margin: "5em auto"}}>
          <div className="get-started-button">
            <div className="top-get-started-title">Login</div>
          </div>
          <div className="login-form">
            <ul>
              <li>
                <input
                  type="email"
                  onChange={this.onChange}
                  placeholder="Email"
                  name="email"
                  value={email}
                />
              </li>
              <li>
                <input
                  type="password"
                  onChange={this.onChange}
                  value={password}
                  name="password"
                  placeholder="Password"
                />
              </li>
            </ul>
            <div className="login-instead">
              <p>
                Don't have an account yet?
                <span>
                  <NavLink exact to="/getStarted">
                    Get Started
                  </NavLink>
                </span>
              </p>
            </div>
            <div className="back-home">
              <NavLink exact to="/">
                <i className="zmdi zmdi-arrow-left"></i>back Home
              </NavLink>
            </div>
          </div>
          <div className="get-started-button">
            <button type="submit" onClick={this.onSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, {
  getUsers,
  login,
  getMovies,
  getMoviesWatched
})(Login);
