import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Home extends Component {
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
                            { unansweredQuestions.map((id) => (
                                <Question key={ id } questionId={ id }/>
                            )) }
                        </div>
                        <div className="tab-pane fade" id="answered" role="tabpanel" >
                            { answeredQuestions.map((id) => (
                                <Question key={ id } questionId={ id }/>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { users, questions, authedUser } = state;
    const user = users[authedUser];

    const questionIds = Object.keys(questions);
    const answeredQuestions = Object.keys(user.answers);

    const unansweredQuestions = questionIds.filter((questionId) => (!answeredQuestions.includes(questionId)));

    return ({
        answeredQuestions: answeredQuestions.length === 0 ? answeredQuestions
            : answeredQuestions.sort((a, b) => (questions[b].timestamp - questions[a].timestamp)),
        unansweredQuestions: unansweredQuestions.length === 0 ? unansweredQuestions
            : unansweredQuestions.sort((a, b) => (questions[b].timestamp - questions[a].timestamp))
    });
};

export default connect(mapStateToProps)(Home);
