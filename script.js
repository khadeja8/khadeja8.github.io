// ظهور المحتوى بالتدريج مع التمرير (fade-in)
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
window.addEventListener('load', revealOnScroll);

// تحريك شريط النسبة
function animateProgressBars() {
  const bars = document.querySelectorAll('.bar span');
  bars.forEach(bar => {
    const targetPercent = parseInt(bar.getAttribute('data-progress'));
    let width = 0;
    const interval = setInterval(() => {
      if (width >= targetPercent) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + '%';
        bar.textContent = bar.textContent.replace(/\d+%/, width + '%');
      }
    }, 25);
  });
}

window.addEventListener('load', () => {
  animateProgressBars();
});

// تلميح على شريط النسبة عند المرور
const bars = document.querySelectorAll('.bar');
bars.forEach(bar => {
  bar.addEventListener('mouseenter', () => {
    bar.style.boxShadow = '0 0 15px 3px #ff5c8d';
  });
  bar.addEventListener('mouseleave', () => {
    bar.style.boxShadow = 'inset 0 3px 10px rgba(255, 92, 141, 0.6)';
  });
});

// نموذج التواصل (رسالة تأكيد)
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('تم إرسال الرسالة بنجاح! شكراً لتواصلك.');
  form.reset();
});
