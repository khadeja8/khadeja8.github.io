// زر رجوع للأعلى
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// تأخير تحميل الصفحة - تحريك أشرطة التقدم تدريجياً
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar span');
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

// زر تغيير اللغة (كمثال - ممكن توسعينه)
const langToggleBtn = document.getElementById('langToggleBtn');
langToggleBtn.addEventListener('click', () => {
  if (langToggleBtn.textContent === 'English') {
    langToggleBtn.textContent = 'العربية';
    // هنا ممكن تضيفي تغيير نصوص الموقع للإنجليزية
  } else {
    langToggleBtn.textContent = 'English';
    // وهنا ترجعي النصوص للعربية
  }
});
