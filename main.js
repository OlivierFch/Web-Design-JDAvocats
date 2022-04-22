// Création du caroussel pour la partie valeurs du cabinet
$('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 50,
    autoplay:true,
    autoplayTimeout:10000,
    nav: true,
    responsive: {
        600: {
            items: 1
        }
    }
})