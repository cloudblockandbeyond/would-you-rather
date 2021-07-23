import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import PropTypes from "prop-types";
import { AiOutlineLogout } from "react-icons/ai/index";
import { Link } from "react-router-dom";

class Nav extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        user: PropTypes.object
    };

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
                    <li className="nav-item active">
                        <Link className="nav-link" to={ { pathname: "/" } }>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ { pathname: "/add" }}>
                            New Question
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to={ { pathname: "/leaderboard" }}>
                            Leader Board
                        </Link>
                    </li>
                </ul>
                { (user !== null) && (
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <span className="active">
                                Hello, { user.name }
                            </span>
                            <span>
                                <img className="img contact-avatar" src={ user.avatarURL } alt={ user.name }></img>
                            </span>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-secondary" type="button"
                                onClick={ this.handleClick }>
                                <AiOutlineLogout />
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    const {users, authedUser } = state;
    const user = authedUser === null ? null : users[authedUser];

    return ({
        user
    });
};

export default connect(mapStateToProps)(Nav);
