import { GET_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from "../actions/questions";

const questions = (state = {}, action) => {
    switch(action.type) {
        case GET_QUESTIONS:
            return ({
                ...state,
                ...action.questions
            });
        case SAVE_QUESTION:
            return ({
                ...state,
                [action.question.id]: action.question
            });
        case SAVE_ANSWER:
            return ({
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat([action.userId])
                    }
                }
            });
        default:
            return state;
    }
};

export default questions;
