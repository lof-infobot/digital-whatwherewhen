import { combineReducers } from 'redux';
import actionNames from './actionNames';
import initialState from './defaultState';

const appReducer = combineReducers({
    // Combine imported reducers here
});

const rootReducer = (state, action) => {
    if(action.type === actionNames.RESET_STATE) {
        state = initialState;
    }

    return appReducer(state, action);
}

export default rootReducer;
