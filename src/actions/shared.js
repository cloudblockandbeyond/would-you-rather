import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { handleGetQuestions, saveQuestion, saveAnswer } from "./questions";
import { handleGetUsers, addUserQuestion, addUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const handleInitialData = () => {
    return ((dispatch) => {
        dispatch(showLoading());
        dispatch(handleGetQuestions());
        dispatch(handleGetUsers());
        dispatch(hideLoading());
    });
};

export const handleSaveQuestion = (newQuestion) => {
    return ((dispatch) => {
        dispatch(showLoading());

        return _saveQuestion(newQuestion).then((question) => {
            dispatch(saveQuestion(question));
            dispatch(addUserQuestion(question.author, question.id));
            dispatch(hideLoading());
        });
    });
};

export const handleSaveQuestionAnswer = (info) => {
    return ((dispatch) => {
        dispatch(showLoading());

        return _saveQuestionAnswer(info).then(() => {
            dispatch(saveAnswer(info.authedUser, info.qid, info.answer));
            dispatch(addUserAnswer(info.authedUser, info.qid, info.answer));
            dispatch(hideLoading());
        });
    });
};
