import SwiperComponent from "../component/swiperComponent"
import OveleyComponet from "../component/oveleyComponte"
import {  SwiperSlide } from 'swiper/react';
import { maquinarias,materiasPrimas } from "../js/serviciosConst";
const ServiciosPages = () => {

    return(
        <>
        <hr />
        <article className="cn-swiper">

             <SwiperComponent title={"Maquinaria"}>
                {
                    maquinarias.map((mq,index) => {
                        return(
                        <SwiperSlide key={index}>
                            <OveleyComponet
                                key={index}
                                imgs={mq.img}
                                title={mq.title}
                                info={mq.info}
                            />
                        </SwiperSlide>
                        )
                    })
                }
            </SwiperComponent>

            <SwiperComponent title={"Materias primas"}>
                {
                    materiasPrimas.map((mq,index) => {
                        return(
                        <SwiperSlide key={index}>
                            <OveleyComponet
                                key={index}
                                imgs={mq.img}
                                title={mq.title}
                                info={mq.info}
                            />
                        </SwiperSlide>
                        )
                    })
                }
            </SwiperComponent>
        </article>
        </>
    )
}

export default ServiciosPages