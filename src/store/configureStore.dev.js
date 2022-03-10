import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import _ from "lodash";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk, promiseMiddleware());
  const enchancers = [middleware];
  // use browser devtools if available
  const browserDevTools = _.get(window, "__REDUX_DEVTOOLS_EXTENSION__");
  if (browserDevTools) {
    enchancers.push(browserDevTools());
  }
  const store = createStore(rootReducer, initialState, compose(...enchancers));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      store.replaceReducer(require("./reducers"));
    });
  }
  return store;
};

export default configureStore;
