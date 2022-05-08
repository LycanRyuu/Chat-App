import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
	chats: chatReducer,
	auth: authReducer,
});

export default reducers;
