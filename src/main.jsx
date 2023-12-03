import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Cards from './Components/data/cards'
// import Home from './Components/Home'
// import About from './Components/about'
// import Skills from './Components/skills'
// import Cv from './Components/cv'
// import Blog from './Components/blog'
// import Work from './Components/work'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
    <Cards />  
    </div>
  </React.StrictMode>
)
