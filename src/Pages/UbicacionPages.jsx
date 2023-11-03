import Mapas from '../component/mapas'
import { UBICACION } from '../js/ubicacion'
const UbicacionesPages = () => {

    return(

        <>
        <hr />
        <article className="cr-container">
            <h1 className="title-map">Ubicación</h1>
            <section className="Mision_y_vision">
                <div className="ubicacion_row">
                    {
                        UBICACION.map((mp,index)=>{
                            return(
                                <Mapas key={index}
                                title={mp.title}
                                gps={mp.gps} />
                            )
                        })
                    }
                </div>
            </section>
        </article>
        </>

    )

}


export default UbicacionesPages