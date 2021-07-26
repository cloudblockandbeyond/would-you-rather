import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";

class UnansweredQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: ""
        };
    }

    handleChange = (event) => {
        this.setState((previousState) => ({
            answer: event.target.value
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { dispatch, question, authedUser } = this.props;

        const info = {
            authedUser, 
            qid: question.id,
            answer: this.state.answer
        };
        
        dispatch(handleSaveQuestionAnswer(info));
    };

    render() {
        const { question, questionAuthor } = this.props
        
        return (
            <div className="row m-4">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">{ questionAuthor.name } asks:</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img className="card-img-top img img-thumbnail" 
                                        src={ `${questionAuthor.avatarURL}` } alt={ `${questionAuthor.name}` }></img>
                                </div>
                                <div className="col-sm-8">
                                    <form onSubmit={ this.handleSubmit }>
                                        <p className="lead">Would you rather...</p>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" 
                                                    id="optionOne" name="choice" value="optionOne"
                                                    onChange={ this.handleChange } />
                                                <label className="form-check-label" htmlFor="optionOne">
                                                    { question.optionOne.text }
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" 
                                                    id="optionTwo" name="choice" value="optionTwo"
                                                    onChange={ this.handleChange } />
                                                <label className="form-check-label" htmlFor="optionTwo">
                                                    { question.optionTwo.text }
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-outline-success" type="submit">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { users, questions, authedUser } = state;
    const { questionId } = props;
    const question = questions[questionId];
    const questionAuthor = users[question.author];

    return ({
        question,
        questionAuthor,
        authedUser
    });
};

export default connect(mapStateToProps)(UnansweredQuestion);
