import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Store from './store/store.js'
import { receiveDefect } from './actions/defects_actions.js'

// Just for testing!
window.Store = Store;
window.receiveDefect = receiveDefect;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
