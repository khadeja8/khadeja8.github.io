// Scroll animation
const animatedElements = document.querySelectorAll(".animate-on-scroll");

function checkScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add("animated");
    }
  });
}
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// زر الرجوع لأعلى
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
