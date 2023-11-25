import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home'
import './main.css'
import About from './Components/about'
import Skills from './Components/skills'
import Cv from './Components/cv'
import Blog from './Components/blog'
import Work from './Components/work'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='Container'><Work /> <Blog /> <Cv /> <Skills /> <About /> <Home />   </div>
  </React.StrictMode>
)
