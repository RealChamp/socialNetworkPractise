import * as serviceWorker from './serviceWorker';
import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './index.css';

    render(
        <BrowserRouter>
            <Provider store={store}>
                <StrictMode>
                    <App/>
                </StrictMode>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
