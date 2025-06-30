// هذا الكود الخاص بتأثير الكتابة (typing effect)
const typingTextElement = document.querySelector('.typing-text');
const phrases = ["مهندسة ذكاء اصطناعي", "مطور تطبيقات Flutter", "باحثة في التعلم الآلي"]; // ممكن تعديل العبارات
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 100;
let pauseTime = 1500;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const currentChar = currentPhrase.substring(0, charIndex);
    typingTextElement.textContent = currentChar;

    if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(typeEffect, pauseTime);
    }
}
document.addEventListener('DOMContentLoaded', typeEffect); // بدء التأثير عند تحميل الصفحة

// هذا الكود الخاص بفتح واغلاق القائمة (Navigation Menu) في الشاشات الصغيرة
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// هذا الكود الخاص بإظهار الأقسام عند الضغط على روابط القائمة
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // إغلاق القائمة بعد اختيار قسم (في الموبايل)
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// كود شريط التقدم (Scroll Progress Bar)
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';
});


// كود عدادات الإحصائيات (Stat Counters)
const statCounters = document.querySelectorAll('.stat-counter');

statCounters.forEach(counter => {
    const target = +counter.dataset.target;
    const speed = 200; // السرعة بالمللي ثانية

    const updateCount = () => {
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    // فقط ابدأ العد عندما يكون العنصر مرئيا
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount();
                observer.unobserve(entry.target); // توقف عن المراقبة بعد بدء العد
            }
        });
    }, { threshold: 0.5 }); // ابدأ العد عندما يكون 50% من العنصر مرئيا
    observer.observe(counter);
});
