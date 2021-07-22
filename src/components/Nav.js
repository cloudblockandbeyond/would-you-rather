import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Nav extends Component {
    handleClick = () => {
        const { dispatch } = this.props;
        const id = null;
        dispatch(setAuthedUser(id));
    };

    render() {
        const { user } = this.props;

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add">
                            New Question
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/leaderboard">
                            Leader Board
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <span className="navbar-brand">
                            Hello, { user.name }
                        </span>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-secondary" type="button"
                            onClick={ this.handleClick }>
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    const {users, authedUser } = state;
    const user = users[authedUser];

    return ({
        user
    });
};

export default connect(mapStateToProps)(Nav);
