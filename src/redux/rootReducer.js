import { combineReducers } from 'redux';
import actionNames from './actionNames';
import initialState from './defaultState';

const content = ( state = {}, action ) => {
    return state;
};

const appReducer = combineReducers({
    // Combine reducers here
    content
});

const rootReducer = (state, action) => {
    if(action.type === actionNames.RESET_STATE) {
        state = initialState;
    }

    return appReducer(state, action);
}

export default rootReducer;
