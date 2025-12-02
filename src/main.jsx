import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ScrollToTop from './components/ui/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop/> 
    </BrowserRouter>
  </React.StrictMode>,
)

// OPTION 1
// moved scroll to top here because due to the animations the parent elements create a new overlaying stack which leads
// the scrollto button to be under that so we can't click it.
// so we have moved it to the top of the stack so that all the components and pages are under it
// but we can also move it to the top of the components in the app.jsx file,
// but when there is a overflow-hidden or transform properties for main component or the routes then the stack overlays the button
// so moved to the top of the stack

// OPTION 2
// i have set pointer events to auto this temporarily blocks the animations and make sures the hover and click action takes place for the button 