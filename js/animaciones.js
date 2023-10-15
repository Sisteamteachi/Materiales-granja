// Manejo de animaciones con GSAP

 gsap.registerPlugin(ScrollTrigger);

gsap.from(".banner-section", { duration: 2.5, fadein: true, x: -600});
gsap.from(".img1", { duration: 2.5, fadein: true, x:-280});
gsap.from(".img2", { duration: 2.5, fadein: true, x:-200});
gsap.from(".img3", { duration: 2.5, fadein: true, x:-100});
//gsap.from(".container-section2", { duration: 3.5, fadein: false, y:80});



gsap.from(".container-section2__div", {
  opacity: 1,                  // Opacidad final (visible)
    y: 600,                        // Posición final (opcional: 0 para eliminar el desplazamiento vertical)
    duration: 1,                 // Duración de la animación (en segundos)
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

  y:200,
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".Mision_y_vision-section",
    start:"top 70%",
    end:"bottom 60%",
    scrub:true,
    toggleActions:"play none none reverse",
    markers:true
  }
})

gsap.from(".carta-Vision",{

  y:400,
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".Mision_y_vision-section",
    start:"top 80%",
    end:"bottom 100%",
    scrub:true,
    toggleActions:"play none none reverse",
    markers:true
  }
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
  });