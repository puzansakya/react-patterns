import { combineReducers } from "redux";

import { PersonReducer } from "./personReducer";

const rootReducer = combineReducers({
  person: PersonReducer,
});

export default rootReducer;
