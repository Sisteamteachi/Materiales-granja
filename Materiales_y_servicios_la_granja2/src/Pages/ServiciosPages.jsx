import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/servicios.css"
const ServiciosPages = () => {

    return(
    <>
        <hr />
        <article className="sw-container swiper">

            <section className="sw-container_colum1">
                <h1> Maquinarias </h1>
            </section>

            <section className="sw-container_colum2">

                <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
            </section>
        </article>

    </>

    )

}

export default ServiciosPages