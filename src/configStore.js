import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import thunkMiddleware from "redux-thunk";

const rootConf = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(rootConf, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);
