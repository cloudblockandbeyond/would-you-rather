import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { handleGetUsers } from "../actions/users";

class App extends Component {
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
          : <div>Home</div>
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
