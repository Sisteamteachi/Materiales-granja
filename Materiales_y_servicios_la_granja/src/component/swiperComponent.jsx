import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "../css/servicios.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponent = ({title,children}) => {

    return(
        <>
            <article className="sw-container">
                <section className="sw-container_colum1">
                    <h1>{title}</h1>
                </section>
                <section className="sw-container_colum2">
                <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                    >
                        {children}
                    </Swiper>
                    
                </section>
            </article>
        </>
    )
}

export default SwiperComponent