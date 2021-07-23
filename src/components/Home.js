import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { handleGetQuestions } from "../actions/questions";

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetQuestions());
    }

    render() {
        const { unansweredQuestions, answeredQuestions } = this.props;

        return (
            <div className="row m-4">
                <div className="col-sm-12">
                    <ul className="nav nav-tabs" id="homeTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="unanswered-tab" data-toggle="tab" href="#unanswered" role="tab">
                                Unanswered Questions
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="answered-tab" data-toggle="tab" href="#answered" role="tab">
                                Answered Questions
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="homeTabContent">
                        <div className="tab-pane fade show active" id="unanswered" role="tabpanel">
                            { unansweredQuestions.map((question) => (
                                <Question key={ question.id } question={ question }/>
                            )) }
                        </div>
                        <div className="tab-pane fade" id="answered" role="tabpanel" >
                            { answeredQuestions.map((question) => (
                                <Question key={ question.id } question={ question }/>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { questions, authedUser } = state;

    const answeredQuestions = [];
    const unansweredQuestions = [];

    Object.keys(questions).forEach((key) => {
        const question = questions[key];

        if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
            answeredQuestions.push(question);
        } else {
            unansweredQuestions.push(question);
        }
    });

    return ({
        unansweredQuestions,
        answeredQuestions
    });
};

export default connect(mapStateToProps)(Home);
