import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
    render() {
        const { questionUser } = this.props
        
        return (
            <div className="row m-4">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">{ questionUser.name } asks:</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img className="card-img-top img img-thumbnail" 
                                        src={ `${questionUser.avatarURL}` } alt={ `${questionUser.name}` }></img>
                                </div>
                                <div className="col-sm-8">
                                    <div className="text-center" style={ { marginTop: "40px" } }>
                                        <p className="lead">Would you rather...</p>
                                        <button className="btn btn-outline-success" type="button">
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
    const { users } = state;
    const { question } = props;
    const questionUser = users[question.author];

    return ({
        questionUser
    });
};

export default connect(mapStateToProps)(Question);
