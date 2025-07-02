// تحريك المحتوى تدريجياً عند النزول بالصفحة
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function revealOnScroll() {
  const windowBottom = window.innerHeight + window.scrollY;

  animatedElements.forEach(el => {
    const elementTop = el.offsetTop;

    if (windowBottom > elementTop + 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();

  // تحريك نسب الإتقان تدريجياً
  const bars = document.querySelectorAll('.bar span');
  bars.forEach(bar => {
    const targetWidth = parseInt(bar.getAttribute('data-progress'));
    let width = 0;
    const interval = setInterval(() => {
      if (width >= targetWidth) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + '%';
        bar.textContent = bar.textContent.replace(/\d+%/, width + '%');
      }
    }, 20);
  });
});

// منع إرسال النموذج فعلياً (تجربة فقط)
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('تم إرسال الرسالة! شكرًا لتواصلك.');
  form.reset();
});
