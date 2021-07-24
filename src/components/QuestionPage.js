import React, { Component } from "react";
import { connect } from "react-redux";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

class QuestionPage extends Component {
    render() {
        const { id, answered } = this.props;

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
    const { users, authedUser } = state;
    const { id } = props.match.params;
    const answered = Object.keys(users[authedUser].answers).includes(id);

    return ({
        id,
        answered
    });
};

export default connect(mapStateToProps)(QuestionPage);
