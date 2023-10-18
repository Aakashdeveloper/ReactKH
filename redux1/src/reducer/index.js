import { combineReducers } from "redux";
import films from './movieReducer';

//declare all reducer here
const rootReducer = combineReducers({
    films
})

export default rootReducer;