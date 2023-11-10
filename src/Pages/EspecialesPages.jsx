import {  SwiperSlide } from 'swiper/react';
import SwiperComponent from "../component/swiperComponent"
import OveleyComponet from "../component/oveleyComponte"
import { ESPECIALES } from '../js/especiales';

const EspecialesPages = () => {

        return(
            <>
             <hr />
            <article className='cn-swiper'>
                <section className='cn-swiper_section'>
                    <h1>Servicios especiales</h1>
                </section>
            <SwiperComponent title={"tractomula"}>
                {
                    ESPECIALES.map((mq,index) => {
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


            <SwiperComponent title={"carro tanque"}>
                {
                    ESPECIALES.map((mq,index) => {
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

export default EspecialesPages