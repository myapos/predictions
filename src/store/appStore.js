import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // use session storage
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from "redux-saga";
import logger from "./logger";
import follower from "./follower";
import manageStorage from "./manageStorage";

import json from "../../package.json";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import * as constants from "../constants/constants";
import { initialState } from "./initialState";

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  // clear old versions of storageToUse
  manageStorage(json.version);

  const persistConfig = {
    key: `${constants.persistenseKey}${json.version}`,
    storage
  };

  const persisted = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    combineReducers({
      persisted
    }),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, ({ getState }) => {
        if (1 || process.env.PRODUCTION) {
          return follower({ getState }); // do not log anything in console
        }
        return logger({ getState }); // for logging state in console
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && !process.env.PRODUCTION
        ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: "predictions" })
        : (f) => f
    )
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  // expose store when run in Cypress
  if (window.Cypress) {
    window.store = store;
  }

  return { store, persistor };
}

export default configureStore;
