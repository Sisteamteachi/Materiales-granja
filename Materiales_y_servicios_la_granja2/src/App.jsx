import { Router, Route } from 'react-router-iba-dev'
import HomePage from './Pages/HomePages'
import ObjectivosPages from './Pages/ObjectivosPages'
import Navbar from './component/navbar'
import Footer from './component/footer'
import './css/App.css'
import ServiciosPages from './Pages/ServiciosPages'



function App() {


  return (
    <main>
      {/* <Navbar/> */}
      {/* <Router>
        <Route path='/'  Component={HomePage}/>
        <Route path='/objectivos' Component={ObjectivosPages}/>
        <Route path='/servicios' Component={}/>
      </Router> */}
    <ServiciosPages/>
      {/* <Footer/> */}
    </main>
  )
}

export default App
