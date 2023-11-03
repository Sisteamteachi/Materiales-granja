import { Router, Route } from 'react-router-iba-dev'
import ServiciosPages from './Pages/ServiciosPages'
import { lazy,Suspense } from 'react'

const Navbar = lazy(() => import('./component/navbar'))
const Footer = lazy(() => import('./component/footer'))
const HomePage = lazy(() => import('./Pages/HomePages'))
const ObjectivosPages = lazy(() => import('./Pages/ObjectivosPages'))
const UbicacionesPages = lazy(() => import('./Pages/UbicacionPages'))
const EspecialesPages  = lazy(() => import('./Pages/EspecialesPages'))
function App() {
  return (
    <main>
      <Suspense fallback={<div>loadin...</div>}>
        <Navbar/>
        <Router>
          <Route path='/' Component={HomePage}/>
          <Route path= '/Servicios' Component={ServiciosPages}/>
          <Route path='/Objectivos' Component={ObjectivosPages} />
          <Route path='/Ubicaciones' Component={UbicacionesPages} />
          <Route path='/Especiales' Component={EspecialesPages}/>
        </Router>
        <Footer/>
      </Suspense>

    </main>
  )
}

export default App
