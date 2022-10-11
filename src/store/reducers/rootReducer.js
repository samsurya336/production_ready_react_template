import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import templateReducer from "./templateReducer";

const templateReducerConfig = {
  key: "template",
  storage: storage,
  blacklist: ["loading"]
};

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["template"]
};

//root reducer
const rootReducer = combineReducers({
  template: persistReducer(templateReducerConfig, templateReducer)
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
