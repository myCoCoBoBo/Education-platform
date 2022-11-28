import {creatStore,combineReducers} from "redux";
import { loginReducer } from "./reducers/login";
const rootReducer=combineReducers({
    loginReducer
})
const store=creatStore(rootReducer)
export default store