import CartaInfo from '../component/cartaInfo'
import FooterVideo from '../component/footerVideo'
import { Mision,Vision } from '../js/mv'
import { FrVideoHome } from '../js/frVideo'
import '../css/home.css'
const HomePage = () =>{

    return(
        <>
            <article>

                <section className="banner">
                    <img src="https://firebasestorage.googleapis.com/v0/b/materiales-la-granja.appspot.com/o/Img%2FIMG_1309.JPG?alt=media&token=01bfc342-6b6b-4aa2-9d7f-384f25215361" />
                    <div className="p-5 text-white fw-bold text-center">
                        <h1 className="banner-title">MATERIALES Y SERVICIOS LA GRANJA </h1>
                    </div>
                </section>

                <section className='container-info'>
                    <h1 className="titulo">Construyendo Éxito Juntos</h1>
                    <p className="paragraphOne">
                        Somos una empresa con más de una década de experiencia especializada en el alquiler de maquinaria pesada, así como en la producción y comercialización de materiales esenciales para la industria de la construcción.

                    Contamos con una flota de maquinaria de alta calidad y una amplia gama de materiales de construcción para satisfacer las necesidades de nuestros clientes.
                    </p>
                </section>

                <section className='mv-container'>
                    <h1 className='mv-container_title'>Quines Somos</h1>
                    <div className='mv-container_row'>
                        <CartaInfo css={Mision.className} title={Mision.title} info={Mision.p}/>
                        <CartaInfo css={Vision.className} title={Vision.title} info={Vision.p}/>
                    </div>
                </section>
                

                <section className="fr-container-video">
                    
                    <div className="fr-container-video_row">
                        <FooterVideo video={FrVideoHome.video} message={FrVideoHome.message} info={FrVideoHome.info}/>
                    </div>
                
                </section>

            </article>
           
        </>

       
    )

}



export default HomePage