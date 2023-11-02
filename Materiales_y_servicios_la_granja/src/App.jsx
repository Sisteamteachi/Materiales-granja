import { Router, Route } from 'react-router-iba-dev'
import ServiciosPages from './Pages/ServiciosPages'
import HomePage from './Pages/HomePages'
import { lazy } from 'react'



function App() {
  return (
    <>
      <Router>
        <Route path='/home' Component={HomePage} />
        <Route path= '/' Component={ServiciosPages}/>
      </Router>
      
    </>
  )
}

export default App
