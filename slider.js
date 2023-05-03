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


window.addEventListener('scroll', function() {
  var navbar = document.querySelector('#navbar');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    navbar.style.backgroundColor = 'black';
    navbar.style.backgroundImage = 'none';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backgroundImage = 'linear-gradient(to bottom, rgba(24, 24, 24, 0.7) 0%, rgba(58, 58, 58, 0.5) 50%,rgba(99, 99, 99, 0.2) 90%, rgba(20, 20, 20, 0.0001) 100%)';
  }
});


var button = document.getElementById("volumeButton");
var vid = document.getElementById("video_preview");
var icon = document.getElementById("#icona_volume");

button.addEventListener("click", function() {
  if (vid.muted) {
    vid.muted = false;
    icon.classList.add("fa fa-volume-up");
  } else {
    vid.muted = true;
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