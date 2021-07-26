import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toHome: false,
            optionOneText: "",
            optionTwoText: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { optionOneText, optionTwoText } = this.state;

        const { dispatch, authedUser } = this.props;

        const newQuestion = {
            optionOneText,
            optionTwoText,
            author: authedUser
        };

        dispatch(handleSaveQuestion(newQuestion));

        this.setState((previousState) => ({
            toHome: true
        }));
    }

    handleChange = (event) => {
        
        if (event.target.name === "optionOneText") {
            this.setState((previousState) => ({
                optionOneText: event.target.value
            }));
        } else if (event.target.name === "optionTwoText") {
            this.setState((previousState) => ({
                optionTwoText: event.target.value
            }));
        }
    }

    render() {
        const { toHome } = this.state;

        if(toHome) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <div className="row m-4">
                <div className="col-sm-8 offset-sm-2">
                    <form onSubmit={ this.handleSubmit }>
                        <div className="card">
                            <div className="card-header text-center">
                                <h6 className="card-title">Create New Question</h6>
                            </div>
                            <div className="card-body">
                                <p className="lead">Complete the question:</p>
                                <p className="lead font-weight-bold">Would you rather...</p>
                                <div className="form-group">
                                    <input className="form-control" type="text"
                                        name="optionOneText" value={ this.state.optionOneText }
                                        onChange={ this.handleChange }
                                        placeholder="Enter Option One text here" />
                                </div>
                                
                                <div className="form-group">
                                    <input className="form-control" type="text"
                                        name="optionTwoText" value={ this.state.optionTwoText }
                                        onChange={ this.handleChange }
                                        placeholder="Enter Option Two text here" />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-outline-success" 
                                    disabled={ !(this.state.optionOneText.length > 0 && this.state.optionTwoText.length > 0) }>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
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

export default connect(mapStateToProps)(NewQuestion);
