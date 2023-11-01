import SwiperComponent from "../component/swiperComponent"
import OveleyComponet from "../component/oveleyComponte"
import {  SwiperSlide } from 'swiper/react';
import { maquinarias } from "../js/serviciosConst";
const ServiciosPages = () => {

    return(
        <>
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
        </>
    )
}

export default ServiciosPages