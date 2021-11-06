import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';



const store = createStore(reducer,composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
              <App />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
