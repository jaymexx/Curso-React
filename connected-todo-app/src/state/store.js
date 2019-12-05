import { createStore } from "redux";
import reducers from "./state";


// Tercer parametro para usar la extension Redux Tools em Chrome
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;