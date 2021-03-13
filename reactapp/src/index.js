import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function render (props) {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
}

// This is to render the micro application when not going through the main shell
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap () {
  console.log('react app bootstraped');
}

export async function mount (props) {
  console.log('react props from main framework', props);
  render(props);
}

export async function unmount (props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
}

serviceWorker.unregister();