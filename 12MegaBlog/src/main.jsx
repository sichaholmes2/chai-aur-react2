import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
//will wrap App with provider and store




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<Provider store={store}>


<App />

</Provider>

  </React.StrictMode>,
)
