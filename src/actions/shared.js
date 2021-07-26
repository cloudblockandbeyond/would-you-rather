import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { handleGetQuestions, saveQuestion, saveAnswer } from "./questions";
import { handleGetUsers, addUserQuestion, addUserAnswer } from "./users";

export const handleInitialData = () => {
    return ((dispatch) => {
        dispatch(handleGetQuestions());
        dispatch(handleGetUsers());
    });
};

export const handleSaveQuestion = (newQuestion) => {
    return ((dispatch) => {
        return _saveQuestion(newQuestion).then((question) => {
            dispatch(saveQuestion(question));
            dispatch(addUserQuestion(question.author, question.id));
        });
    });
};

export const handleSaveQuestionAnswer = (info) => {
    return ((dispatch) => {
        return _saveQuestionAnswer(info).then(() => {
            dispatch(saveAnswer(info.authedUser, info.qid, info.answer));
            dispatch(addUserAnswer(info.authedUser, info.qid, info.answer));
        });
    });
};
