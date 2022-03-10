let configureStore;

configureStore = require("./configureStore.prod").default;

const store = configureStore();
export default store;
