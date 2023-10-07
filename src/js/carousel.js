const carousels = document.querySelectorAll(".carousel");
let currentSlide = 0;

function showSlide() {
  carousels.forEach((carousel, index) => {
    if (index === currentSlide) {
      carousel.style.display = "block";
    } else {
      carousel.style.display = "none";
    }
  });

  const arrows = document.querySelectorAll(".arrow");
  if (currentSlide === 0) {
    arrows[0].classList.add("closed");
    arrows[1].classList.remove("closed");
  } else if (currentSlide === carousels.length - 1) {
    arrows[0].classList.remove("closed");
    arrows[1].classList.add("closed");
  } else {
    arrows[0].classList.remove("closed");
    arrows[1].classList.remove("closed");
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carousels.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carousels.length) % carousels.length;
  showSlide();
}

showSlide();

setInterval(nextSlide, 5000);
