import { Router, Route } from 'react-router-iba-dev'
import ServiciosPages from './Pages/ServiciosPages'
import HomePage from './Pages/HomePages'
import ObjectivosPages from './Pages/ObjectivosPages'
import Navbar from './component/navbar'
import Footer from './component/footer'
import { lazy } from 'react'



function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Route path='/' Component={HomePage}/>
        <Route path= '/Servicios' Component={ServiciosPages}/>
        <Route path='/Objectivos' Component={ObjectivosPages} />
      </Router>
      <Footer/>
    </>
  )
}

export default App
