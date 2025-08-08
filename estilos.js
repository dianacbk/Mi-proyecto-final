let index = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  document.querySelector(".slides").style.transform = `translateX(-${i * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}, 4000);
