document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Spotlight Effect (Premium Hover) ---
    const spotlightCards = document.querySelectorAll('.spotlight');
    document.addEventListener('mousemove', (e) => {
        spotlightCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- 2. Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { root: null, threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 3. Certifications "Show More" Logic ---
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreCertsDiv = document.getElementById('more-certs');
    
    if (showMoreBtn && moreCertsDiv) {
        showMoreBtn.addEventListener('click', function() {
            moreCertsDiv.classList.toggle('d-none');
            const isHidden = moreCertsDiv.classList.contains('d-none');
            
            if (!isHidden) {
                this.textContent = 'Show Less';
                moreCertsDiv.classList.add('reveal', 'active'); 
            } else {
                this.textContent = 'Show More';
            }
        });
    }

    // --- 4. Navbar Effects ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.padding = '12px 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.6)';
            navbar.style.padding = '18px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- 5. Active Link Switching ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- 6. Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 7. EmailJS Contact Form ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        emailjs.init("fg1Bm34uaxF59svck"); 
        
        contactForm.addEventListener('submit', function(e) {
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
                alert(`Thanks ${name}! Your message has been sent successfully.`);
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
});