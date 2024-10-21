document.addEventListener("DOMContentLoaded", function() {
    var backtop = document.querySelector('.backtop');
    
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      var viewportHeight = window.innerHeight;
      var isInFirstHalf = scrollPosition < viewportHeight / 2;
      backtop.style.opacity = isInFirstHalf ? '0' : '1';
    };
  });