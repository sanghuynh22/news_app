import { combineReducers } from "redux";
import loginUserReducer from "./user/loginUser";
import logoutUserReducer from "./user/logoutUser";
import currentUserReducer from "./user/currentUser";
import createNewsReducer from "./news/createNews";
import createFastNewsReducer from "./fastnews/createFastNews";
import getAllNewsReducer from "./news/getAllNews";
import getAllFastNewsReducer from "./fastnews/getAllFastNews";
import getNewsReducer from "./news/getNews";
import getAllUserReducer from "./user/getAllUser";
const rootReducer = combineReducers({
	user: combineReducers({
		loginUser: loginUserReducer,
		logoutUser: logoutUserReducer,
		currentUser: currentUserReducer,
		getAllUser: getAllUserReducer,
	}),
	news: combineReducers({
		createNews: createNewsReducer,
		getAllNews: getAllNewsReducer,
		getNews: getNewsReducer,
	}),
	fastnews: combineReducers({
		createFastNews: createFastNewsReducer,
		getAllFastNews: getAllFastNewsReducer,
	}),
});
export default rootReducer;
