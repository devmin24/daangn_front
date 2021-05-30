import "./App.css";
import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Header from "../components/Header";
import Main from "../pages/Main";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/list" exact component={PostList} />
        <Route path="/detail/:daangnProductId" exact component={PostDetail} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
