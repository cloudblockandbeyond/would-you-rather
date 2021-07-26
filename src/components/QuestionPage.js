import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

class QuestionPage extends Component {
    render() {
        const { validQuestion, id, answered } = this.props;

        if (!validQuestion) {
            return (
                <Redirect to="/error" />
            );
        }

        return (
            <div>
                { (answered)
                    ? <AnsweredQuestion questionId={ id }/>
                    : <UnansweredQuestion questionId={ id }/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { users, questions, authedUser } = state;
    const { id } = props.match.params;
    const answered = Object.keys(users[authedUser].answers).includes(id);
    const validQuestion = Object.keys(questions).includes(id);

    return ({
        id,
        answered,
        validQuestion
    });
};

export default connect(mapStateToProps)(QuestionPage);
