import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.myGlobalVariable = "global variable value";

ReactDOM.render(
  <App value={window.myGlobalVariable} />,
  document.getElementById('root') as HTMLElement
);
