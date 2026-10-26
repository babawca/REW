// --- 1. ЛЕТАЮЩИЕ СМАЙЛИКИ ---
const heartsContainer = document.getElementById('hearts-container');
const emojis = ['❤️', '💖', '✨', '💕', '😍', '💘'];
const numHearts = 30; // Количество смайликов на экране

for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-emoji');
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Рандомные позиции и скорость
    const startLeft = Math.random() * 100;
    const animationDuration = Math.random() * 6 + 8; // От 8 до 14 секунд
    const animationDelay = Math.random() * 5;
    const size = Math.random() * 25 + 15; // Размер от 15 до 40px

    heart.style.left = `${startLeft}vw`;
    heart.style.animationDuration = `${animationDuration}s`;
    heart.style.animationDelay = `${animationDelay}s`;
    heart.style.fontSize = `${size}px`;

    heartsContainer.appendChild(heart);
}

// --- 2. КНОПКА ОТКРЫТИЯ ---
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});

// --- 3. ЭФФЕКТ УВЕЛИЧЕНИЯ ФОТО ---
document.querySelectorAll('.photos img').forEach(img => {
    img.addEventListener('click', () => {
        if (img.classList.contains('zoomed')) {
            img.classList.remove('zoomed');
        } else {
            document.querySelectorAll('.photos img').forEach(i => i.classList.remove('zoomed'));
            img.classList.add('zoomed');
        }
    });
});

// --- 4. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Наблюдаем за текстом и фото
document.querySelectorAll('.letter p, .photos img').forEach(el => observer.observe(el));