// Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple form validation
            if (!data.name || !data.email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Handle membership plan selection
        document.querySelectorAll('.plan-button').forEach(button => {
            button.addEventListener('click', function() {
                const planName = this.parentElement.querySelector('.plan-name').textContent;
                const planPrice = this.parentElement.querySelector('.plan-price').textContent;
                alert(`You selected the ${planName} plan for ${planPrice}/month! Contact us to complete your membership.`);
            });
        });

        // Gallery item interaction
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const title = this.querySelector('.gallery-overlay h3').textContent;
                alert(`${title} - Click to view full gallery (feature coming soon!)`);
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e)';
            }
        });