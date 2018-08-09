import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { createStore } from 'redux'; 

const store = createStore(rootReducer);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
