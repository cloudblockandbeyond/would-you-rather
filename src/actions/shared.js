import { _saveQuestion } from "../utils/_DATA";
import { saveQuestion } from "./questions";
import { saveQuestionAuthor } from "./users";

export const handleSaveQuestion = (newQuestion) => {
    return ((dispatch) => {
        return _saveQuestion(newQuestion).then((question) => {
            dispatch(saveQuestion(question));
            dispatch(saveQuestionAuthor(question.author, question.id));
        });
    });
};
