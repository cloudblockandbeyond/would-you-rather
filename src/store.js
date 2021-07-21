import { createStore } from "redux";
import reducer from "./reducers/index";
import middleware from "./middlewares/index";

const store = createStore(
    reducer,
    middleware
);

export default store;
