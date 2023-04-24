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
      pagination: 0,
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

  new Splide( '#slider_top', {
    height: '17rem',
    perMove: 5,
    autoWidth: true,
    pagination: 0,
    gap: '10px',
  }).mount();

  new Splide( '#slider_visti_netflix', {
    height: '14rem',
    perMove: 5,
    pagination: 0,
    autoWidth: true,
    gap: '10px',
  }).mount();
} );

if (window.matchMedia("(max-width: 782px)").matches) {
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('#navbar');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    navbar.style.backgroundColor = 'black';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});
}

var button = document.getElementById("volumeButton");
var vid = document.getElementById("video_preview");
var icon = document.getElementById("#icona_volume");

button.addEventListener("click", function() {
  if (vid.muted) {
    vid.muted = false;
    icon.classList.remove("fa fa-volume-mute");
    icon.classList.add("fa fa-volume-up");
  } else {
    vid.muted = true;
    icon.classList.remove("fa fa-volume-up");
    icon.classList.add("fa fa-volume-mute");
  }
});

let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
navbar.style.transition = '0.1s';
navbar.style.backgroundColor = 'black';
document.body.classList.toggle('menu-open');
});

var button = document.querySelector('#playButton');

button.addEventListener('click', function() {
  window.open('https://streamingcommunity.capital/watch/112', '_self');
});