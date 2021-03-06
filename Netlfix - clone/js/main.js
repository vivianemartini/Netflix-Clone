function toggleVideo(){
const trailer = document.querySelector('.trailer');
const video = document.querySelector('video');
trailer.classList.toggle('active');
video.currentTime = 0;
video.pause();
}



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})