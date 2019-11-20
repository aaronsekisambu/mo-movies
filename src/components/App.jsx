import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import Login from "./Login";
import GetStarted from "./GetStarted";
import Support from "./Support";
import Dashboard from "./Dashboard";

toast.configure({
  autoClose: 5000,
  draggable: false
});
const info = {
  title: {
    love: "We love to here from you",
    join: "Be the first of your friends, Join Now",
    customers: "Support is only for user",
  },
  action: { talk: "Talk to us:", time: "It's time you" },
  reaction: {
    email: "aaron.sekisambu@gmail.com",
    login: "login or an create account"
  }
};

const App = () => (
  <BrowserRouter>
    <div className="container">
      <div className="sub-container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/about"
            component={() => (
              <About
                title={info.title.love}
                action={info.action.talk}
                reaction={info.reaction.email}
              />
            )}
          />
          <Route
            path="/lost/dash"
            component={() => (
              <About
                title={info.title.join}
                action={info.action.time}
                reaction={info.reaction.login}
              />
            )}
          />
          <Route
            path="/lost"
            component={() => (
              <About
                title={info.title.customers}
                action={info.action.time}
                reaction={info.reaction.login}
              />
            )}
          />
          <Route exact path="/login" component={Login} />
          <Route path="/getStarted" component={GetStarted} />
          <Route path="/support/:username" component={Support} />
          <Route path="/dashboard/:username" component={Dashboard} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
