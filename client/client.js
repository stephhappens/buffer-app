import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Store from './Store'
import actions from './actions'
import App from './components/App'

const store = new Store({
  updates: [], 
  visible: 0,
  error: false,
  end: false
});

// Get State from store
const render = (store) => {
  const props = store.getState()
  // Pass the dispatch method to allow events to be triggered from components
  const dispatch = store.dispatch.bind(store)
  ReactDOM.render(
    <App
      {...props}
      dispatch={dispatch}
    />,
    document.getElementById('root')
  )
};

render(store);

// Listen to state changes
store.onChange(() => render(store))

// Load initial data
store.dispatch({ type: actions.LOAD_UPDATES })
