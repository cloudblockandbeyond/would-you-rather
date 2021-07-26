import { _getQuestions } from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";

const getQuestions = (questions) => ({
    type: GET_QUESTIONS,
    questions
});

export const handleGetQuestions = () => {
    return ((dispatch) => {
        return _getQuestions().then((questions) => {
            dispatch(getQuestions(questions));
        });
    });
};

export const SAVE_QUESTION = "SAVE_QUESTION";

export const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question
});
