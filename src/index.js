import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';
import configureStore from './store/configureStore'
import * as serviceWorker from './registerServiceWorker';
import { WebGLRenderer } from 'three';
import { Provider } from 'react-redux'
import 'reset-css';
import "react-datepicker/dist/react-datepicker.css";

const store = configureStore()

const rootEl = document.getElementById('root')
const renderer = new WebGLRenderer({antialias: true})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp renderer={renderer} />
      </Provider>,
      rootEl
    )
  })
}