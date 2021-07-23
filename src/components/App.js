import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/users";
import PropTypes from "prop-types";
import Nav from "./Nav";
import SignIn from "./SignIn";
import Home from "./Home";
import { Route } from "react-router-dom";

class App extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetUsers());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Fragment>
        <Nav />
        <div className="container-fluid">
          { authedUser === null
            ? <SignIn />
            : (
              <div>
                <Route exact path="/" render={ () => (
                  <Home />
                ) }/>
              </div>
            )
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { authedUser } = state;

  return ({
    authedUser
  });
};

export default connect(mapStateToProps)(App);
