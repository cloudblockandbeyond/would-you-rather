import React, { Component } from "react";
import { connect } from "react-redux";

class AnsweredQuestion extends Component {
    render() {
        const { question, questionAuthor, authedUser } = this.props

        const optionOneVote = question.optionOne.votes.length;
        const optionTwoVote = question.optionTwo.votes.length;
        const totalVote = optionOneVote + optionTwoVote;
        const optionOneVotePercent = (optionOneVote/totalVote) * 100;
        const optionTwoVotePercent = (optionTwoVote/totalVote) * 100;

        const yourChoice = question.optionOne.votes.includes(authedUser)
         ? "optionOne" : "optionTwo"
        
        return (
            <div className="row m-4">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">Asked by { questionAuthor.name }:</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img className="card-img-top img img-thumbnail contact-avatar-answered" 
                                        src={ `${questionAuthor.avatarURL}` } alt={ `${questionAuthor.name}` }></img>
                                </div>
                                <div className="col-sm-8">
                                    <h5 className="lead">Results:</h5>
                                    <div className="alert alert-warning" role="alert">
                                        { (yourChoice === "optionOne") && (
                                            <span className="badge badge-pill badge-info your-vote">
                                                Your Vote 
                                            </span>
                                        )}
                                        <p>Would you rather { question.optionOne.text }?</p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" 
                                                style={ { width: `${ optionOneVotePercent }%` } }>
                                                { optionOneVotePercent }%
                                            </div>
                                        </div>
                                        <span>{ optionOneVote } out of { totalVote } votes</span>
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        { (yourChoice === "optionTwo") && (
                                            <span className="badge badge-pill badge-info your-vote">
                                                Your Vote 
                                            </span>
                                        )}
                                        <p>Would you rather { question.optionTwo.text }?</p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" 
                                                style={ { width: `${ optionTwoVotePercent }%` } }>
                                                { optionTwoVotePercent }%
                                            </div>
                                        </div>
                                        <span>{ optionTwoVote } out of { totalVote } votes</span>
                                    </div>
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

export default connect(mapStateToProps)(AnsweredQuestion);
