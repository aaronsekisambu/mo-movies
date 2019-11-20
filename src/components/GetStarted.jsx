import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import { connect } from "react-redux";
import {
  createUser,
  getMovies,
  getUsers,
  getMoviesWatched
} from "../redux/action-creators";

const options = [
  { value: "user", label: "user" },
  { value: "seller", label: "seller" },
  { value: "admin", label: "admin" }
];

class GetStarted extends Component {
  state = {
    firstName: "",
    firstNameError: {},
    lastName: "",
    lastNameError: {},
    password: "",
    passwordError: {},
    email: "",
    emailError: {},
    username: "",
    usernameError: {},
    confirmPassword: "",
    accountType: "",
    showErrorInput: {}
  };
  componentDidMount() {}
  accountTypeError = () => toast.error("Select Account type");
  disabled = () => toast.info("Sign up Disabled, Use default yours and just login for now");
  showRedError = () => ({
    border: "1px solid #E91E63",
    borderRadius: "3px",
    paddingLeft: "1em"
  });
  mismatch = () => toast.error("Password did not match");
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = selectedOption => {
    this.setState({ accountType: selectedOption });
  };
  onSubmit = async e => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      firstName,
      accountType,
      username,
      lastName
    } = this.state;
    const { createUser, history } = this.props;

    if (firstName === "") {
      return this.setState({ firstNameError: this.showRedError() });
    }
    if (lastName === "") {
      return this.setState({ lastNameError: this.showRedError() });
    }
    if (username === "") {
      return this.setState({ usernameError: this.showRedError() });
    }
    if (email === "") {
      return this.setState({ emailError: this.showRedError() });
    }
    if (password !== confirmPassword) {
      return this.mismatch();
    }
    if (accountType === "") {
      return this.accountTypeError();
    }
    this.disabled()
    // await createUser({
    //   email,
    //   password,
    //   username,
    //   lastName,
    //   firstName,
    //   accountType
    // });
    // const {
    //   newUser: { users },
    //   getMovies,
    //   getUsers,
    //   getMoviesWatched
    // } = this.props;

    // if (users.status === 201) {
    //   await getMovies(users.username);
    //   await getUsers(users.username);
    //   await getMoviesWatched(users.username);
    //   history.push(`/dashboard/${users.username}`);
    // }
  };
  render() {
    const {
      email,
      password,
      lastName,
      firstName,
      confirmPassword,
      accountType,
      username
    } = this.state;
    return (
      <div className="content-container">
        <div className="getStarted-content">
          <div className="get-started-button">
            <div className="top-get-started-title">Get Started</div>
          </div>
          <div className="get-started-form">
            <ul>
              <li>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  name="firstName"
                  onChange={this.onChange}
                  style={this.state.firstNameError}
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  name="lastName"
                  onChange={this.onChange}
                  style={this.state.lastNameError}
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  name="username"
                  onChange={this.onChange}
                  style={this.state.usernameError}
                />
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={this.onChange}
                  style={this.state.emailError}
                />
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={this.onChange}
                  // style={this.state.passwordError}
                />
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={this.onChange}
                />
              </li>
              <li>
                <Select
                  type="text"
                  placeholder="select account type"
                  value={accountType}
                  name="accountTYpe"
                  options={options}
                  onChange={this.handleChange}
                  className="select-account-type"
                />
              </li>
            </ul>
            <div className="login-instead">
              <p>
                Already have an account?
                <span>
                  <NavLink exact to="/login">
                    Login
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
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// newUser: state.users
const mapStateToProps = state => ({
  newUser: state.users
});
export default connect(mapStateToProps, {
  createUser,
  getMovies,
  getUsers,
  getMoviesWatched
})(GetStarted);
