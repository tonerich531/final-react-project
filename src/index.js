import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, fa-magnifying-glass } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom'

library.add( faBars, fa-magnifying-glass ) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
