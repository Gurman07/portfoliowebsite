// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Modal functionality for image slider
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('image-modal-close');

    // Open modal with image
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            modal.style.display = 'block';
        });
    });

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let valid = true;

        // Clear previous errors
        form.querySelectorAll('.error').forEach(error => error.remove());

        if (!name) {
            showError('name', 'Name is required.');
            valid = false;
        }

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            showError('email', 'Valid email is required.');
            valid = false;
        }

        if (!message) {
            showError('message', 'Message cannot be empty.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        field.parentElement.appendChild(error);
    }
});
