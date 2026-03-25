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

    // Header scroll effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });

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
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your full name.');
                isValid = false;
                firstErrorField = firstErrorField || nameInput;
            }

            // Phone validation
            const phoneInput = this.querySelector('#phone');
            const phoneValue = phoneInput.value.trim();
            const phoneRegex = /^[\d\s\-\(\)\.+]+$/;
            if (!phoneValue) {
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
            const emailValue = emailInput.value.trim();
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
            if (!caseTypeSelect.value) {
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

    // Animate elements on scroll (respects reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.practice-card, .feature-card, .area-group').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
});

// Structured Data for FAQ (can be expanded)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What areas does Alex Craig Law serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Alex Craig Law serves California's Central Coast and Central Valley, including Monterey County, San Benito County, Santa Cruz County, Stanislaus County, Merced County, and surrounding areas."
            }
        },
        {
            "@type": "Question",
            "name": "What types of cases does Alex Craig handle?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Alex Craig handles estate planning (wills, trusts, probate), immigration law (family-based immigration, green cards, citizenship), criminal defense (DUI, drug crimes, theft), and personal injury cases (car accidents, slip and falls)."
            }
        },
        {
            "@type": "Question",
            "name": "Does Alex Craig offer free consultations?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Alex Craig Law offers free initial consultations. Contact the office at (209) 470-6385 to schedule your consultation."
            }
        }
    ]
};

// Add FAQ schema to page
const faqScript = document.createElement('script');
faqScript.type = 'application/ld+json';
faqScript.textContent = JSON.stringify(faqSchema);
document.head.appendChild(faqScript);
