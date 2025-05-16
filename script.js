document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // FAQ Accordions
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlider && testimonials.length > 0) {
        let currentIndex = 0;
        
        // Set initial position
        updateSliderPosition();
        
        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                updateSliderPosition();
            });
        }
        
        // Previous button click
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                updateSliderPosition();
            });
        }
        
        // Auto slide (every 5 seconds)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSliderPosition();
        }, 5000);
        
        function updateSliderPosition() {
            const translateX = -currentIndex * 100;
            testimonialSlider.style.transform = `translateX(${translateX}%)`;
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission (prevent default and show success message)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demo purposes, just show a success message
            
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Thank you! Your submission has been received.';
            successMessage.style.color = 'var(--primary-color)';
            successMessage.style.marginTop = '10px';
            
            // Remove any existing success messages
            const existingMessage = form.querySelector('.success-message');
            if (existingMessage) {
                form.removeChild(existingMessage);
            }
            
            successMessage.classList.add('success-message');
            form.appendChild(successMessage);
            
            // Reset form
            form.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                form.removeChild(successMessage);
            }, 3000);
        });
    });
    
    // Add scroll animation for elements
    const revealElements = document.querySelectorAll('.service-card, .feature, .area, .testimonial');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Add CSS for the reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .feature, .area, .testimonial {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Check on load and scroll
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
});

 document.getElementById('goToImage').addEventListener('click', function () {
      const imageSection = document.getElementById('image-section');
      imageSection.scrollIntoView({ behavior: 'smooth' });
    });