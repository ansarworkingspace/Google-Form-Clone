import React from 'react'
import Header from './components/header/Header'
import './App.css'
import Template from './components/template/Template'
import MainBody from './components/mainBody/MainBody'

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Template/>
      <MainBody/>
    </div>
  )
}

export default App
