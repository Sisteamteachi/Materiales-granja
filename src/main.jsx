import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/normalize.css'
import './css/index.css'
import './css/swiper.css'
import './css/navbar.css'
import "./css/servicios.css"
import './css/home.css'
import './css/objectivos.css'
import './css/ubicacion.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
