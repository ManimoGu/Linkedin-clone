import { combineReducers } from "redux";
import userReducer from "./userReducer"
import articleReducer from "./ArticleReducer";

export const rootReducer = combineReducers({

    userState : userReducer,
    article : articleReducer
      
})