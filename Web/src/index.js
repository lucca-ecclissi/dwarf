import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.min.js');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();