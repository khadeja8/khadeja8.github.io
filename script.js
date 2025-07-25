// تأثير كتابة الاسم (Typing Effect)
function typeEffect(element, speed = 150) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// دالة لإظهار العناصر بالتدريج عند النزول على الصفحة
function revealOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// دالة لتحريك شريط النسبة
function animateProgressBars() {
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
        bar.textContent = bar.textContent.split('–')[0].trim() + ' – ' + width + '%';
      }
    }, 30);
  });
}

// بدء الحركات عند تحميل الصفحة
window.addEventListener('load', () => {
  // تأثير كتابة الاسم
  const typingElement = document.querySelector('.typing-text');
  typeEffect(typingElement, 120);

  // باقي الحركات
  revealOnScroll();
  animateProgressBars();
});

// تشغيل تأثير الظهور عند النزول
window.addEventListener('scroll', revealOnScroll);

// نموذج التواصل - لمنع إعادة تحميل الصفحة عند الإرسال (اختياري)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('تم إرسال الرسالة بنجاح، شكراً لتواصلك!');
  contactForm.reset();
});
