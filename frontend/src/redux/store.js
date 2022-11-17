import { legacy_createStore as createStore } from "redux";

import reducer from "./moneyReducer";

const store = createStore(reducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state ", store.getState());
});
export default store;
