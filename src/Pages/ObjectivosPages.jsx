
import { CARD } from "../js/cards"
import Card from "../component/card"

const ObjectivosPages = () => {

    return(
        <>

            <hr/>
            <article className="ob-container">


                    <div className="ob-container_colum1">
                        <h1>Objectivos</h1>
                    </div>

                    <div className="ob-container_colum2">

                        {
                            CARD.map((cd,index) => {

                                return(
                                    <Card 
                                        key={index}
                                        imgs={cd.img}
                                        title={cd.title}
                                        infoText={cd.infoText}
                                    />
                                )
                        })
                        }
                    </div>

            </article>

            
        </>
    )
}


export default ObjectivosPages