// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
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

    // Form submission handler with validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.phone || !data['case-type']) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return;
            }

            // Phone validation
            const phoneRegex = /^[\d\s\-\(\)\.+]+$/;
            if (!phoneRegex.test(data.phone)) {
                e.preventDefault();
                alert('Please enter a valid phone number.');
                return;
            }

            // Email validation (if provided)
            const emailValue = data.email;
            if (emailValue) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailValue)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    return;
                }
            }

            // Form will submit to Netlify if validation passes
        });
    }

    // Animate elements on scroll
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

    // Phone click tracking (for analytics)
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            // In production, send to analytics
            console.log('Phone call initiated:', this.href);
        });
    });
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
