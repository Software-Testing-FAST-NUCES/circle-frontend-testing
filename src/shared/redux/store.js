import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./reducers/userSlice.js";
import logger from "redux-logger";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  user: user,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: [thunk, logger],
});

const persistor = persistStore(store);
export { store, persistor };
