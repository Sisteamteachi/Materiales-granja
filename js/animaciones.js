// Manejo de animaciones con GSAP

gsap.registerPlugin(ScrollTrigger);

gsap.from(".banner-section", { duration: 2.5, fadein: true, x: -600});
gsap.from(".img1", { duration: 2.6, fadein: true, x:-280});
gsap.from(".img2", { duration: 2.5, fadein: true, x:-370});
gsap.from(".img3", { duration: 2.3, fadein: true, x:-350});
gsap.from(".banner_mensaje",{duration: 4.5, fadein: true, x:-500})
//gsap.from(".container-section2", { duration: 3.5, fadein: false, y:80});



gsap.from(".container-section2__div", {
  opacity: 1,                  // Opacidad final (visible)
    y: 450,                        // Posición final (opcional: 0 para eliminar el desplazamiento vertical)
    duration: 5,                 // Duración de la animación (en segundos)
    scrollTrigger: {
      trigger: ".container-section2", // Elemento que dispara la animación
      start: "top 70%",         // Comienza la animación cuando el 80% del elemento es visible
      end: "bottom 60%",    // Termina la animación cuando el centro del elemento alcanza el centro de la ventana
      scrub: true,              // Animación suave durante el desplazamiento
      toggleActions: "play none none reverse", // Comportamiento de la animación al desplazar
      //markers:true
      },
      color:"transparent",
  });


gsap.from(".carta-Mision",{

  y:450,
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".Mision_y_vision-section",
    start:"top 70%",
    end:"bottom 60%",
    scrub:true,
    toggleActions:"play none none reverse",
   // markers:true
  }
})

gsap.from(".carta-Vision",{

  y:950,
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".Mision_y_vision-section",
    start:"top 80%",
    end:"bottom 60%",
    scrub:true,
    toggleActions:"play none none reverse",
   //markers:true,
  },
})



gsap.to(".container-section9",{
  duration:1,
  scrollTrigger:{
    trigger:".container-section9",
    start:"top 80%",
    end:"bottom 60%",
    scrub:true,
    toggleActions:"play none none reverse",
   //markers:true,
  },
  background:"#0a3547",
  color:"white"
})

// gsap.from(".contacto-footer",{
//   duration:1,
//   scrollTrigger:{
//     trigger:".contacto-footer",
//     start:"top 1%",
//     end:"bottom 100%",
//     scrub:true,
//     toggleActions:"play none none reverse",
//   // markers:true,
//   },
//   background:"white",
//   color:"black"
// })



gsap.from(".container-section9__div-colum2",{

  duration:1.5,
  y:600,
  scrollTrigger:{
    trigger:".container-section9 ",
    start:"top 80%",
    end:"bottom 60%",
    scrub:true,
    toggleActions:"play none none reverse",
  // markers:true,
  },

})



ScrollTrigger.create({
  trigger: ".banner-section",
  start: "top center",
  onEnter: () => gsap.fromTo(".banner-section", { opacity: 0, x: -10, duration: 5 }),
})


// Galería con Swiper 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  effect: "cube",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 10,
        shadowScale: 0.0001,
      },
    speed: 2000,
    loop: true,
});