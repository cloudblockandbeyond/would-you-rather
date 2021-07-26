import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import PropTypes from "prop-types";
import Nav from "./Nav";
import SignIn from "./SignIn";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import PageNotFound from "./PageNotFound";

class App extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
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
                <Switch>
                  <Route exact path="/" component={ Home }/>
                  <Route exact path="/questions/:id" component={ QuestionPage } />
                  <Route exact path="/add" component={ NewQuestion } />
                  <Route exact path="/leaderboard" component={ LeaderBoard } />
                  <Route exact path="/error" component={ PageNotFound } />
                  <Route path="*" render={ () => (
                    <Redirect to="/error" />
                  ) } />
                </Switch>
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
