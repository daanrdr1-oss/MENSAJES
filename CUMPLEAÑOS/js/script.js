document.addEventListener('DOMContentLoaded', function () {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const heartsContainer = document.getElementById('hearts-container');
    const floatingHearts = document.getElementById('floating-hearts');
    const fullscreenLetter = document.getElementById('fullscreen-letter');
    const closeBtn = document.getElementById('close-btn');
    const mainContainer = document.getElementById('main-container');
    const notification = document.getElementById('notification');
    const bgMusic = document.getElementById('bg-music');

    // Mostrar aviso
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }, 1000);

    // Asegurar autoplay: si el navegador bloquea el audio, lo iniciamos en el primer clic (en cualquier parte)
    if (bgMusic) {
        bgMusic.volume = 0.3;
        const ensureAutoplay = () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
            // Este listener se ejecuta solo una vez
            document.removeEventListener('click', ensureAutoplay);
        };
        document.addEventListener('click', ensureAutoplay, { once: true });
    }

    function createFloatingHearts() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '🎂';
            heart.classList.add('floating-heart');

            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDelay = Math.random() * 5 + 's';

            floatingHearts.appendChild(heart);
        }
    }

    function openEnvelope() {
        envelope.classList.add('open');
        mainContainer.classList.add('open-envelope');

        setTimeout(() => {
            fullscreenLetter.classList.add('active');
            document.body.style.overflow = 'hidden';
            createHeartExplosion();
            // ❌ IMPORTANTE: No tocamos la música aquí.
        }, 1000);

        createInitialHearts();
    }

    function closeFullscreenLetter() {
        fullscreenLetter.classList.remove('active');
        document.body.style.overflow = '';
        // ❌ No pausamos la música: sigue sonando.
        setTimeout(() => {
            envelope.classList.remove('open');
            mainContainer.classList.remove('open-envelope');
        }, 300);
    }

    envelopeWrapper.addEventListener('click', openEnvelope);
    closeBtn.addEventListener('click', closeFullscreenLetter);

    fullscreenLetter.addEventListener('click', function (e) {
        if (e.target === fullscreenLetter) {
            closeFullscreenLetter();
        }
    });

    function createInitialHearts() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '🎂';
                heart.classList.add('heart-fall');

                heart.style.left = Math.random() * 100 + 'vw';
                const size = Math.random() * 30 + 15;
                heart.style.fontSize = size + 'px';
                const duration = Math.random() * 3 + 2;
                heart.style.animationDuration = duration + 's';

                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 150);
        }
    }

    function createHeartExplosion() {
        const explosionContainer = document.createElement('div');
        explosionContainer.style.position = 'fixed';
        explosionContainer.style.top = '50%';
        explosionContainer.style.left = '50%';
        explosionContainer.style.transform = 'translate(-50%, -50%)';
        explosionContainer.style.zIndex = '100';
        document.body.appendChild(explosionContainer);

        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '🎂';
            heart.classList.add('heart-explosion');

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            heart.style.fontSize = (Math.random() * 24 + 16) + 'px';
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 65%)`;

            explosionContainer.appendChild(heart);
        }

        setTimeout(() => {
            explosionContainer.remove();
        }, 1500);
    }

    const specialName = document.querySelector('.special-name');
    setInterval(() => {
        specialName.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
    }, 2000);

    createFloatingHearts();
});
