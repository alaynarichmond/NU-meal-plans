import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';
import App from './App';

const store = createStore(rootReducer);

const AppContainer = () => (
    <Provider store={store}>
        <App/>
    </Provider>

);

export default AppContainer;