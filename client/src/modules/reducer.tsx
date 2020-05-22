import { combineReducers } from "redux";
import itemsReducer from "./items";
import authReducer from "./auth";
const rootReducer = combineReducers({
  item: itemsReducer,
  auth: authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
