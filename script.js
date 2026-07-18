// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            // Update ARIA state
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.focus();
            }
        });

        // Trap focus within open menu
        navLinks.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && navLinks.classList.contains('active')) {
                const focusableElements = navLinks.querySelectorAll('a, button');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    // Header scroll effect (class-driven so CSS owns the visual)
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (header) {
            header.classList.toggle('is-scrolled', currentScroll > 60);
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation helper functions
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        formGroup.classList.add('error');
        input.setAttribute('aria-invalid', 'true');

        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        formGroup.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');

        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function clearAllErrors(form) {
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            const input = group.querySelector('input, select, textarea');
            if (input) {
                input.setAttribute('aria-invalid', 'false');
            }
            const errorElement = group.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    }

    // Form submission handler with inline validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Clear errors on input
        contactForm.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => clearError(field));
            field.addEventListener('change', () => clearError(field));
        });

        contactForm.addEventListener('submit', function(e) {
            clearAllErrors(this);
            let isValid = true;
            let firstErrorField = null;

            // Name validation
            const nameInput = this.querySelector('#name');
            if (nameInput && !nameInput.value.trim()) {
                showError(nameInput, 'Please enter your full name.');
                isValid = false;
                firstErrorField = firstErrorField || nameInput;
            }

            // Phone validation
            const phoneInput = this.querySelector('#phone');
            const phoneValue = phoneInput ? phoneInput.value.trim() : 'skip';
            const phoneRegex = /^[\d\s\-\(\)\.+]+$/;
            if (!phoneInput) {
                // no phone field on this form
            } else if (!phoneValue) {
                showError(phoneInput, 'Please enter your phone number.');
                isValid = false;
                firstErrorField = firstErrorField || phoneInput;
            } else if (!phoneRegex.test(phoneValue) || phoneValue.replace(/\D/g, '').length < 10) {
                showError(phoneInput, 'Please enter a valid phone number.');
                isValid = false;
                firstErrorField = firstErrorField || phoneInput;
            }

            // Email validation (if provided)
            const emailInput = this.querySelector('#email');
            const emailValue = emailInput ? emailInput.value.trim() : '';
            if (emailValue) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailValue)) {
                    showError(emailInput, 'Please enter a valid email address.');
                    isValid = false;
                    firstErrorField = firstErrorField || emailInput;
                }
            }

            // Case type validation
            const caseTypeSelect = this.querySelector('#case-type');
            if (caseTypeSelect && !caseTypeSelect.value) {
                showError(caseTypeSelect, 'Please select a case type.');
                isValid = false;
                firstErrorField = firstErrorField || caseTypeSelect;
            }

            if (!isValid) {
                e.preventDefault();
                // Focus the first field with an error
                if (firstErrorField) {
                    firstErrorField.focus();
                }
                return;
            }

            // Form will submit to Netlify if validation passes
        });
    }

    // Scroll-linked reveals now live in the motion system below
    // (JS-additive: hidden states exist only under html.motion).
});

// GA4 event tracking: phone clicks and form submissions
document.addEventListener('DOMContentLoaded', function() {
    function track(eventName, params) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, params || {});
        }
    }

    // Stamp source page into intake forms
    document.querySelectorAll('form input[name="page"]').forEach(field => {
        if (!field.value) {
            field.value = window.location.pathname;
        }
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            track('phone_click', { link_location: window.location.pathname });
        });
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', () => {
            track('email_click', { link_location: window.location.pathname });
        });
    });

    document.querySelectorAll('form[data-netlify="true"]').forEach(form => {
        form.addEventListener('submit', () => {
            // Fires only when inline validation allows submission to proceed
            if (form.checkValidity && !form.querySelector('.form-group.error')) {
                track('generate_lead', {
                    form_name: form.getAttribute('name') || 'contact',
                    link_location: window.location.pathname
                });
            }
        });
    });
});

// ============================================================
// Motion system (2026 redesign) — additive and JS-gated.
// Reveal-hidden states exist only under html.js / html.motion,
// so with JavaScript disabled (or if this file fails to load)
// every element on the page stays fully visible. Transform and
// opacity only; scroll work is rAF-throttled with passive
// listeners; parallax is desktop-only and clamped.
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const docEl = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasIO = 'IntersectionObserver' in window;

    // Safety: if the inline head bootstrap did not run, add .js here
    docEl.classList.add('js');

    // --- Entrance choreography: wait for fonts, never more than 600ms ---
    let loaded = false;
    const markLoaded = () => {
        if (loaded) return;
        loaded = true;
        docEl.classList.add('is-loaded');
    };
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(markLoaded, markLoaded);
        setTimeout(markLoaded, 600);
    } else {
        setTimeout(markLoaded, 80);
    }

    // --- Trust counters: quiet tick-up, reading the value already in the markup ---
    function startCounter(el) {
        if (el.dataset.counted) return;
        el.dataset.counted = '1';
        const match = /^(\d+)(\+?)$/.exec(el.textContent.trim());
        if (!match) return; // "Free" and friends stay as-is
        const target = parseInt(match[1], 10);
        const suffix = match[2] || '';
        const dur = 1400;
        let t0 = null;
        function frame(now) {
            if (!t0) t0 = now;
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    // --- Scroll-linked reveals ---
    if (reduced || !hasIO) {
        // No scroll motion: html.motion is never added, so nothing is
        // hidden. Mark everything .is-in for any state-dependent styling.
        document.querySelectorAll('[data-observe], [data-reveal], [data-step]').forEach(el => {
            el.classList.add('is-in');
        });
    } else {
        // Arm scroll-reveal styling only now that we know we can reveal.
        docEl.classList.add('motion');

        // Quiet auto-reveals on interior pages: tag common components so
        // no per-page markup is required. Because the .rv class (and its
        // hidden state) is added here, a JS-less visit never hides them.
        const autoSelectors = [
            '.reason-card',
            '.area-group',
            '.highlight-box',
            '.mini-intake',
            '.table-wrap',
            '.sidebar > div',
            '.contact-form-wrapper',
            '.location-cta h2',
            '.location-cta p',
            '.location-cta .cta-buttons'
        ].join(', ');
        document.querySelectorAll(autoSelectors).forEach(el => {
            if (el.hasAttribute('data-reveal') || el.hasAttribute('data-observe') || el.hasAttribute('data-step')) return;
            el.classList.add('rv');
            // Stagger siblings that reveal together (100-130ms beats, capped)
            let i = 0;
            let sib = el.previousElementSibling;
            while (sib) {
                if (sib.classList.contains('rv')) i++;
                sib = sib.previousElementSibling;
            }
            if (i > 0) el.style.transitionDelay = Math.min(i, 4) * 110 + 'ms';
        });

        const observed = document.querySelectorAll('[data-observe], [data-reveal], [data-step], .rv');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                el.classList.add('is-in');
                el.querySelectorAll('.trust-number').forEach(startCounter);
                io.unobserve(el);
                // Release any stagger delay so hover transitions stay snappy
                if (el.style.transitionDelay) {
                    setTimeout(() => { el.style.transitionDelay = ''; }, 1600);
                }
            });
        }, { threshold: 0.15, rootMargin: '-40px 0px' });

        observed.forEach(el => {
            // Anything already scrolled past (e.g. anchor deep-links)
            // reveals immediately rather than waiting to re-enter view.
            if (el.getBoundingClientRect().bottom < 0) {
                el.classList.add('is-in');
                el.querySelectorAll('.trust-number').forEach(startCounter);
                el.style.transitionDelay = '';
            } else {
                io.observe(el);
            }
        });
    }

    // --- Hero ghost drift + portrait parallax (desktop only, clamped) ---
    const ghost = document.querySelector('.hero-ghost');
    const para = document.querySelector('[data-parallax]');
    if (!reduced && (ghost || para)) {
        let ticking = false;
        const update = () => {
            ticking = false;
            if (window.innerWidth <= 992) {
                if (ghost) ghost.style.transform = '';
                if (para) para.style.setProperty('--para', 0);
                return;
            }
            const y = window.pageYOffset;
            if (ghost) ghost.style.transform = 'translateY(' + (y * 0.07).toFixed(1) + 'px)';
            if (para) {
                const rect = para.getBoundingClientRect();
                const center = rect.top + rect.height / 2 - window.innerHeight / 2;
                const drift = Math.max(-36, Math.min(36, center * 0.055));
                para.style.setProperty('--para', drift.toFixed(2));
            }
        };
        window.addEventListener('scroll', () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }, { passive: true });
        update();
    }
});
