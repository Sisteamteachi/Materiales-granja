

const CartaInfo = ({css,title,info}) =>{

    return(

        <section className={css}>
            <h1>{title}</h1>
            <p>{info}</p>
        </section>
    )
}


export default CartaInfo;