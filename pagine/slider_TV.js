document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#slider_drammi', {
          height: '14rem',
          perMove: 5,
          pagination: 0,
          autoWidth: true,
          gap: '10px',
        }).mount();

    new Splide( '#slider_crime', {
        height: '14rem',
        perMove: 5,
        pagination: false,
        autoWidth: true,
        gap: '10px',
        }).mount();

    new Splide( '#slider_più_visti', {
        height: '14rem',
        perMove: 5,
        pagination: 0,
        autoWidth: true,
        gap: '10px',
        }).mount();
  } );

let item = document.querySelector('.icon-hamburger');

item.addEventListener("click", function() {
  document.body.classList.toggle('menu-open');
});