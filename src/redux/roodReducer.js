import { combineReducers } from "redux";
import { likeReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
export const rootReducer = combineReducers({
  likeReducer,
  inputReducer,
  commentsReducer,
});
