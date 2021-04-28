import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { App } from 'shell/App';

if (process.env.NODE_ENV === 'production') {
  render(<App />, document.getElementById('app'));
}
