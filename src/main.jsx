import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Meme from "./Components/Meme.jsx"
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Meme/>
  </React.StrictMode>,
)
