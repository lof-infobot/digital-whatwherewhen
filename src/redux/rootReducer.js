import { combineReducers } from 'redux';
import { content, constants } from './reducers';

const appReducer = combineReducers({
    // Combine reducers here
    content,
    constants
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
