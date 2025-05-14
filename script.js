document.addEventListener('DOMContentLoaded', () => {
    // --- Configuración del Campo de Estrellas ---
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numStars = 200;
    const stars = [];

    function initStars() {
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1, // Estrellas de diferentes tamaños
                speed: Math.random() * 0.5 + 0.2 // Velocidades diferentes
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
            ctx.fill();

            // Mover estrella
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0; // Reposicionar arriba
                star.x = Math.random() * canvas.width; // En una nueva posición X
            }
        });
    }

    function animateStars() {
        drawStars();
        requestAnimationFrame(animateStars);
    }

    initStars();
    animateStars();

    // --- Animación de Texto (Typewriter) ---
    const greetingEl = document.getElementById('greeting');
    const messageEl = document.getElementById('main-message');

    const greetingText = "¡Hey, Super Lucy! ✨";
    const mainMessageText = "En este gran juego llamado vida, eres mi compañera de equipo Nivel ÉPICO. ¡Gracias por ser una amiga tan increíble y por cada +1UP de alegría que traes! ¡Sigamos desbloqueando aventuras juntos! 🎮💖";

    let charIndexGreeting = 0;
    let charIndexMessage = 0;
    const typingSpeed = 70; // ms

    function typeGreeting() {
        if (charIndexGreeting < greetingText.length) {
            greetingEl.textContent += greetingText.charAt(charIndexGreeting);
            charIndexGreeting++;
            setTimeout(typeGreeting, typingSpeed);
        } else {
            // Una vez que termina el saludo, empieza el mensaje principal
            setTimeout(typeMessage, typingSpeed + 200); // Pequeña pausa
        }
    }

    function typeMessage() {
        if (charIndexMessage < mainMessageText.length) {
            messageEl.textContent += mainMessageText.charAt(charIndexMessage);
            charIndexMessage++;
            setTimeout(typeMessage, typingSpeed - 20); // Un poco más rápido para el mensaje largo
        }
    }

    // Iniciar la animación de escritura después de que la caja aparezca
    setTimeout(typeGreeting, 1600); // Sincronizar con la animación CSS de fadeInBox
});