document.addEventListener('DOMContentLoaded', function () {

    // --- 1. SITE-WIDE SCROLL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- 2. PREMIUM MOUSE SPOTLIGHT (From Previous Site) ---
    // This creates the subtle mouse-tracking glow on cards
    const spotlightCards = document.querySelectorAll('.project-card, .cert-card, .skill-card, .bento-card');

    // Add spotlight class to these elements dynamically if they don't have it
    spotlightCards.forEach(card => card.classList.add('spotlight'));

    document.addEventListener('mousemove', (e) => {
        spotlightCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- 3. INFINITE MARQUEE FIX (Seamless Loop) ---
    // Automatically duplicates the tech items to create a perfect loop
    const marqueeTrack = document.querySelector('.tech-marquee .track');
    const marqueeContent = document.querySelector('.tech-marquee .track .content');

    if (marqueeTrack && marqueeContent) {
        // Clone the content div and append it to the track
        // This ensures we have exactly two sets of items for the -50% translation
        const clone = marqueeContent.cloneNode(true);
        marqueeTrack.appendChild(clone);
    }

    // --- 4. 3D CAROUSEL LOGIC ---
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel3D = document.getElementById('carousel3D');

    let isDragging = false;
    let startX;
    let rotationSpeed = 0.4; // Sensitivity

    if (carouselContainer && carousel3D) {

        // MOUSE EVENTS
        carouselContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            carouselContainer.style.cursor = 'grabbing';
            carousel3D.style.animationPlayState = 'paused';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            // Optional: You can add manual drag rotation here if desired
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            carouselContainer.style.cursor = 'grab';
            carousel3D.style.animationPlayState = 'running';
        });

        // TOUCH EVENTS
        carouselContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            carousel3D.style.animationPlayState = 'paused';
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
            carousel3D.style.animationPlayState = 'running';
        });
    }

    // --- 5. VANILLA TILT ---
    const tiltElements = document.querySelectorAll("[data-tilt]");
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(tiltElements, {
            max: 5,
            speed: 1000,
            glare: true,
            "max-glare": 0.1,
            easing: "cubic-bezier(.03,.98,.52,.99)"
        });
    }

    // --- 6. NAVBAR SCROLL ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(99, 102, 241, 0.2)';
            navbar.style.padding = '12px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = '1px solid transparent';
            navbar.style.padding = '18px 0';
        }
    });

    // --- 7. EMAILJS CONFIGURATION ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        emailjs.init("fg1Bm34uaxF59svck");

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            emailjs.send("service_o6by6fp", "template_jiot9hu", {
                from_name: name, from_email: email, subject: subject, message: message, to_email: "msdperera99@gmail.com"
            })
                .then(() => {
                    alert(`Thanks ${name}! Message sent.`);
                    contactForm.reset();
                })
                .catch((err) => {
                    alert('Failed to send. Please try again.');
                    console.error(err);
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // --- 8. SHOW MORE CERTIFICATES LOGIC ---
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreCertsDiv = document.getElementById('more-certs');
    if (showMoreBtn && moreCertsDiv) {
        showMoreBtn.addEventListener('click', function () {
            moreCertsDiv.classList.toggle('d-none');
            if (!moreCertsDiv.classList.contains('d-none')) {
                this.textContent = 'Show Less';
                const hiddenItems = moreCertsDiv.querySelectorAll('.cert-card');
                hiddenItems.forEach(item => {
                    item.parentElement.classList.add('scroll-reveal', 'active');
                });
            } else {
                this.textContent = 'Show More';
            }
        });
    }
});