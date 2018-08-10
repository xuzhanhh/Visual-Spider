import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './dag';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div style={{display:'flex', flexFlow:'column', height:'100vh'}}><App /></div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
