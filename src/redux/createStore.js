//https://medium.com/@e_himmelfarb/implement-redux-devtools-extension-with-thunk-and-other-async-middleware-20e97100b2b0

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import defaultContent from "./content.json";
import constants from "./constants.json";

export default () => {
    let cachedState = window.sessionStorage.getItem("digital-whatwherewhen-redux-store");
    let initialState = cachedState ? JSON.parse(cachedState) : { content: defaultContent.content, constants };

    let store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    store.subscribe(() => {
        window.sessionStorage.setItem("digital-whatwherewhen-redux-store", JSON.stringify(store.getState()));
    });

    return store;
}