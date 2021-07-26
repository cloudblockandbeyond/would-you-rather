import { GET_USERS, SAVE_QUESTION_AUTHOR } from "../actions/users";

const users = (state = {}, action) => {
    switch(action.type) {
        case GET_USERS:
            return ({
                ...state,
                ...action.users
            });
        case SAVE_QUESTION_AUTHOR:
            return ({
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    questions: state[action.userId].questions.concat(action.questionId)
                }
            });
        default:
            return state;
    }
};

export default users;
