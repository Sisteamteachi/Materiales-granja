
const OveleyComponet = ({imgs,title,info}) => {

    return(
        <>
        <div className="swiper-contenedor">
            <img src={imgs} alt={title} className="swiper-img"/>
            <div className="swiper-overlay">
                <div className="swiper-overlay_content">
                <h2>
                  {title}
                </h2>
                <p>
                   {info}
                </p>
                </div>
            </div>
        </div>
        </>
    )

}


export default OveleyComponet