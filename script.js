// Example for:
// https://github.com/fabeat/responsive-fullpage-scroll
// Script for pagescrolling and showing pagedots.

document.addEventListener("DOMContentLoaded", function() {
    var wrap = document.getElementById('wrap');
    var fps = new FullPageScroll(wrap);
    var indicator = document.createElement('div');
    indicator.id = 'indicator';
    var slideIndicators = [];
    fps.slides.forEach(function(slide, index){
      var slideIndicator = document.createElement('div');
      slideIndicator.onclick = function() {
        fps.goToSlide(index);
      }
      if (index === fps.currentSlide) {
        slideIndicator.className = "active";
      }
      indicator.appendChild(slideIndicator);
      slideIndicators.push(slideIndicator);
    });
    document.body.appendChild(indicator);
    fps.onslide = function() {
      slideIndicators.forEach(function(slideIndicator, index) {
        if (index === fps.currentSlide) {
          slideIndicator.className = "active";
        } else {
          slideIndicator.className = "";
        }
      });
    }
});



// Script Image Gallery New Version
// Use below code for regular image gallery if wanted.

// const gallery = document.getElementById('gallery');
// const popup = document.getElementById('popup');
// const selectedImage = document.getElementById('selectedImage');

// const imageIndexes = [1,2,3,4,5];
// const selectedIndex = null;

// imageIndexes.forEach((i) => {
//     const image = document.createElement('img');
//     image.src = `/img/projectImg/cover_episode-${i}.jpg`;
//     image.alt = `Cover for episode ${i} och the project`;
//     image.classList.add('galleryImg');

//     image.addEventListener('click', () => {
//         // Popup stuff
//         popup.style.transform = `translateY(0)`;
//         selectedImage.src = `/img/projectImg/cover_episode-${i}.jpg`;
//         selectedImage.alt = `Cover for episode ${i} och the project`;
//     });
//     gallery.appendChild(image);
// });

// popup.addEventListener('click', () => {
//     popup.style.transform = `translateY(-100%)`;
//     popup.src = '';
//     popup.alt = '';
// });
// END OF regular image gallery code.