import React, { Component } from "react";
import { connect } from "react-redux";
import { BsAwardFill } from "react-icons/bs/index"

class LeaderBoard extends Component {
    render() {
        const { users } = this.props;

        return (
            <div className="row m-4">
                <div className="col-sm-12">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Answered Questions</th>
                                    <th>Created Questions</th>
                                    <th>Total Questions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.map((user, index) => (
                                    <tr key={ user.id }>
                                        <td>
                                            <BsAwardFill size="30" color={ index === 0 ?  "#daa520" 
                                            : index === 1 ? "#c0c0c0" : "#cd7f32" }/>
                                        </td>
                                        <td>
                                            <img className="leaderboard-image img img-thumbnail" 
                                                    src={ user.avatarURL } 
                                                    alt="sarah">
                                            </img>
                                        </td>
                                        <td>
                                            <p className="lead font-weight-bold leaderboard-text-margin">
                                                { user.name }
                                            </p>
                                        </td>
                                        <td>
                                            <p className="lead font-weight-bold leaderboard-text-margin">
                                                { user.answers }
                                            </p>
                                        </td>
                                        <td>
                                            <p className="lead font-weight-bold leaderboard-text-margin">
                                                { user.questions }
                                            </p>
                                        </td>
                                        <td>
                                            <div className="score">
                                                <div className="score-name">
                                                    Score
                                                </div>
                                                <div className="score-total">
                                                    { user.total }
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { users } = state;
    const modifiedUsers = [];

    Object.keys(users).forEach((userId) => {
        var newUser = {
            id: users[userId].id,
            avatarURL: users[userId].avatarURL,
            name: users[userId].name,
            answers: Object.keys(users[userId].answers).length,
            questions: Object.keys(users[userId].questions).length,
            total: Object.keys(users[userId].answers).length + Object.keys(users[userId].questions).length
        };

        modifiedUsers.push(newUser);
    });

    return ({
        users: modifiedUsers.sort((a, b) => (b.total - a.total))
    });
};

export default connect(mapStateToProps)(LeaderBoard);
