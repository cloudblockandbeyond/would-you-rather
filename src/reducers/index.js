import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";
import questions from "./questions";

const reducer = combineReducers({
    users,
    authedUser,
    questions
});

export default reducer;
