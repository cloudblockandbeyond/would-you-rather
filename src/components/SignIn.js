import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSelected: "0"
        };
    }

    handleChange = (e) => {
        this.setState((previousState) => ({
            userSelected: e.target.value
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.state.userSelected;

        const { dispatch } = this.props;
        dispatch(setAuthedUser(id))
    }

    render() {
        const { userSelected } = this.state;
        const { users } = this.props;

        return (
            <div className="row m-4">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <h5 className="card-title text-center">Welcome to the Would You Rather app</h5>
                            <p className="text-muted">Please sign in to continue</p>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" 
                                src={ `${process.env.PUBLIC_URL}/logo.png` } 
                                alt="would-you-rather-logo">
                            </img>
                        </div>
                        <div className="card-footer">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="d-grid gap-2">
                                    <select onChange={ this.handleChange }>
                                        <option value="0" defaultValue>Select User</option>
                                        { Object.keys(users).map( (id) => (
                                            <option key={ id } value={ id }>
                                                { users[id].name }
                                            </option>
                                        ) ) }
                                    </select>
                                </div>
                                <br />
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success text-center" 
                                        type="submit" disabled={ userSelected==="0" } >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { users } = state;

    return ({
        users
    });
};

export default connect(mapStateToProps)(SignIn);
