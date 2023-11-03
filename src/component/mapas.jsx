
const Mapas = ({key,title,gps}) => {

    return(
        <div className="carta-map carta-map_border">
            <h1 className="text-center"> <i className="bi bi-map-fill"></i>{title}</h1>
            <iframe className='mt-3' src={gps} width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Mapas