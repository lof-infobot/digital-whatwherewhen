import actionNames from './actionNames';

// Basic reducers.  In general, put reducer functions in a "reducers" file
// close to the components consuming state changes.
export const content = ( state = {}, action ) => {
    if(action.type === actionNames.SET_CONTENT) {
        return action.payload;
    }

    return state;
};

export const constants = (state = {}, action ) => {
    if(action.type === actionNames.SET_CONSTANTS) {
        return action.payload;
    }

    return state;
}