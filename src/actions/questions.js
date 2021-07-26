import { _getQuestions } from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

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

export const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question
});

export const saveAnswer = (userId, questionId, answer) => ({
    type: SAVE_ANSWER,
    userId,
    questionId,
    answer
});
