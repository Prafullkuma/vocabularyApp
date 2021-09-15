import { combineReducers, createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import wordsReducers from '../reducers/wordsReducers'

const configureStore=createStore(combineReducers({
        words:wordsReducers
})
,applyMiddleware(thunk))

export default configureStore