

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="slide"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

var slideIndex = 1;
showDivs(slideIndex);

var bE = document.querySelector("#botaoesquerda");
var bD = document.querySelector("#botaodireito");

function showDivs(n) {

  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

bE.addEventListener('click', function() {
  plusDivs(-1);
});
bD.addEventListener('click', function() {
  plusDivs(1);
});







