import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { counterReducer } from "./reducers/cartReducers";
import { userRegisterLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  cart: counterReducer,
  userRegisterLogin: userRegisterLoginReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  { cart: { value: 0 } },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
