import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";

const reducer = combineReducers({
    users,
    authedUser
});

export default reducer;
