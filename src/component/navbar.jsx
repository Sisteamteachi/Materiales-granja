import { Link } from 'react-router-iba-dev';

const Navbar = () =>{

    return(

        <header>
            <nav className="nv-navegacion">
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="bi bi-list"></i>
                </label>

                <Link to="/" className="nv-navegacion_a">
                    <img className="nv-navegacion-img" src="https://firebasestorage.googleapis.com/v0/b/materiales-la-granja.appspot.com/o/Img%2Flogo.png?alt=media&token=068bc1b2-9924-4ba2-845c-1200922ab34c" alt="Logo principal de la pagina"/>
                </Link>
                <ul className="nv-navegacion_list-link">

                    <li className="nv-navegacion-link">
                       <Link to='/'>Inicio</Link>
                    </li>

    
                    <li className="nv-navegacion-link">
                        <Link to='/Servicios'>SERVICIOS</Link>
                    </li>

                    <li className="nv-navegacion-link">
                        <Link to="/Especiales">Servicios especiales</Link>
                    </li>

                    <li className="nv-navegacion-link">
                        <Link to='/Objectivos'>Objetivos</Link>
                    </li>

                    <li className="nv-navegacion-link">
                        <Link to='Ubicaciones'>Ubicacion</Link>
                    </li>

                </ul>
            </nav>
        </header>

    )
}


export default Navbar;