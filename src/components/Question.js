import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Question extends Component {
    handleClick = (event, id) => {
        event.preventDefault();
        this.props.history.push(`/questions/${id}`);
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
                                    <div className="text-center" style={ { marginTop: "40px" } }>
                                        <p className="lead">Would you rather...</p>
                                        <button className="btn btn-outline-success" 
                                            type="button" onClick={ (event) => { this.handleClick(event, question.id) } }>
                                            View Poll
                                        </button>
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
    const { users, questions } = state;
    const { questionId } = props;
    const question = questions[questionId];
    const questionAuthor = users[question.author];

    return ({
        question,
        questionAuthor
    });
};

export default withRouter(connect(mapStateToProps)(Question));
