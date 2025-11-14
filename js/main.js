const ready = (fn) => {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

ready(() => {
    initNavigation();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();
    initHeaderObserver();
    updateCurrentYear();
});

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            hamburger.classList.remove('is-active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

function initSmoothScroll() {
    const header = document.getElementById('header');
    const headerOffset = () => (header ? header.offsetHeight : 0);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#' || targetId === '#!') return;
            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const offset = headerOffset() + 16;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !revealElements.length) {
        revealElements.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.25,
            rootMargin: '0px 0px -50px 0px',
        }
    );

    revealElements.forEach((element) => {
        const delay = element.dataset.delay || '0s';
        element.style.transitionDelay = delay;
        observer.observe(element);
    });
}

function initContactForm() {
    const form = document.getElementById('inquiry-form');
    const messageEl = document.querySelector('.form-message');
    if (!form || !messageEl) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        const errors = [];

        if (!name) errors.push('お名前をご入力ください。');
        if (!email || !isValidEmail(email)) errors.push('正しいメールアドレスをご入力ください。');
        if (!message) errors.push('お問い合わせ内容をご入力ください。');

        if (errors.length) {
            messageEl.textContent = errors.join(' ');
            messageEl.classList.remove('success');
            messageEl.classList.add('error');
            return;
        }

        messageEl.textContent = '送信が完了しました。1営業日以内にご連絡いたします。';
        messageEl.classList.remove('error');
        messageEl.classList.add('success');
        form.reset();
    });
}

function isValidEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
}

function initHeaderObserver() {
    const header = document.getElementById('header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

function updateCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (!yearEl) return;
    yearEl.textContent = new Date().getFullYear();
}
