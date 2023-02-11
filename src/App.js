import React from 'react'
import './App.css'
import Create from './component/Create'
import Readdata from './component/Readdata'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Update from './component/Update'

const App = () => {

  return (
    <>
    <div className="bg">
    <h1 className='heading'>React Crud Operations</h1>
    <div className='main'>
    
    <Router>
      <Routes>
        <Route path='/' element ={<Create/>}  />
        <Route path='read' element ={<Readdata/>}  />
        <Route path='update' element ={<Update/>}  />
        
      </Routes>
    </Router>
    </div>
    </div>
    
    </>
  )
}

export default App