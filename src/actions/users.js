import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

const getUsers = (users) => ({
    type: GET_USERS,
    users
});

export const handleGetUsers = () => {
    return ((dispatch) => {
        return _getUsers().then((users) => {
            dispatch(getUsers(users));
        });
    });
};

export const addUserQuestion = (userId, questionId) => ({
    type: ADD_USER_QUESTION,
    userId,
    questionId
});

export const addUserAnswer = (userId, questionId, answer) => ({
    type: ADD_USER_ANSWER,
    userId,
    questionId,
    answer
});
