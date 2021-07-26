import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";

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

export const SAVE_QUESTION_AUTHOR = "SAVE_QUESTION_AUTHOR";

export const saveQuestionAuthor = (userId, questionId) => ({
    type: SAVE_QUESTION_AUTHOR,
    userId,
    questionId
});
