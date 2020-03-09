//https://medium.com/@e_himmelfarb/implement-redux-devtools-extension-with-thunk-and-other-async-middleware-20e97100b2b0

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
}