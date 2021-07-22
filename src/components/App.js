import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { handleGetUsers } from "../actions/users";
import PropTypes from "prop-types";
import Nav from "./Nav";

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
      <div className="container-fluid">
        { authedUser === null
          ? <SignIn />
          : (
            <div>
              <Nav />
            </div>
          )
        }
      </div>
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
