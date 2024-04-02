import { createStore} from "redux";

import rootred from "./reducers";


const store = createStore(rootred);


export default store;