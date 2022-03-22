gsap.registerPlugin(ScrollTrigger);

gsap.from(".link" , {
    // duração da animação
    duration: 0.7,
    // opacidade que vai começar a animação
    opacity: 0,
    // posição do y que vai começar os elementos na animação
    y: -150,
    // tempo entre a animação dos elementos com a mesma classe
    stagger: 0.4
});







