const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const chatButton = document.querySelector('.chat-btn');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggle.checked = true;
}

const cards = document.querySelectorAll('.card');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    scrollObserver.observe(card);
});

chatButton.addEventListener('click', () => {
    window.location.href = 'mailto:castro.reyarby@gmail.com';
});

const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-5px)';
        project.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
        project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});