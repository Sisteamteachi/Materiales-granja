
const Card = ({title,infoText,imgs}) => {

    return(
        <>

            <section className="card" style={{width: '50rem'}}>
                <img src={imgs} className="card-img-top" alt="sany horizontal"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{infoText}</p>
                </div>
            </section>

        </>
    )

}

export default Card