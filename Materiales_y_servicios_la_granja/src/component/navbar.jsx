import '../css/navbar.css'
const Navbar = () =>{

    return(

        <header>
            <nav className="nv-navegacion">
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="bi bi-list"></i>
                </label>

                <a href="" className="nv-navegacion_a">
                    <img className="nv-navegacion-img" src="https://firebasestorage.googleapis.com/v0/b/materiales-la-granja.appspot.com/o/Img%2Flogo.png?alt=media&token=068bc1b2-9924-4ba2-845c-1200922ab34c" alt="Logo principal de la pagina"/>
                </a>
                <ul className="nv-navegacion_list-link">

                    <li className="nv-navegacion-link">
                        <a href="./">Inicio</a>
                    </li>

                    <li className="nv-navegacion-link">
                        <a href="#MV">ACERCA DE</a>
                    </li>
    
                    <li className="nv-navegacion-link">
                        <a href="./servicios/">SERVICIOS</a>
                    </li>

                    <li className="nv-navegacion-link">
                        <a href="./especiales/">Servicios especiales</a>
                    </li>

                    <li className="nv-navegacion-link">
                        <a href="./objetivos/">objetivos</a>
                    </li>

                    <li className="nv-navegacion-link">
                        <a href="./ubicacion/">Ubicaciones</a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}


export default Navbar;