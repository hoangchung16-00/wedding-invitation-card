// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2026-03-15T15:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '15px 0';
    }
    
    lastScroll = currentScroll;
});

// Calendar Button Functions
function addToGoogleCalendar() {
    const title = encodeURIComponent('Hoang Linh & Dieu Huyen Wedding');
    const details = encodeURIComponent('Join us to celebrate our special day!');
    const location = encodeURIComponent('Grand Hall, 123 City Center Avenue, Downtown District');
    const startDate = '20260315T150000Z';
    const endDate = '20260315T210000Z';
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;
    window.open(url, '_blank');
}

function addToAppleCalendar() {
    // Generate ICS file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//EN
BEGIN:VEVENT
DTSTART:20260315T150000Z
DTEND:20260315T210000Z
SUMMARY:Hoang Linh & Dieu Huyen Wedding
DESCRIPTION:Join us to celebrate our special day!
LOCATION:Grand Hall, 123 City Center Avenue, Downtown District
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wedding-invitation.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function addToOutlookCalendar() {
    const title = encodeURIComponent('Hoang Linh & Dieu Huyen Wedding');
    const details = encodeURIComponent('Join us to celebrate our special day!');
    const location = encodeURIComponent('Grand Hall, 123 City Center Avenue, Downtown District');
    const startDate = '2026-03-15T15:00:00';
    const endDate = '2026-03-15T21:00:00';
    
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&body=${details}&location=${location}&startdt=${startDate}&enddt=${endDate}`;
    window.open(url, '_blank');
}

// Add event listeners to calendar buttons
document.getElementById('google-calendar').addEventListener('click', addToGoogleCalendar);
document.getElementById('apple-calendar').addEventListener('click', addToAppleCalendar);
document.getElementById('outlook-calendar').addEventListener('click', addToOutlookCalendar);

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvp-form');
const attendanceSelect = document.getElementById('attendance');
const guestsGroup = document.getElementById('guests-group');

// Show/hide guests field based on attendance
attendanceSelect.addEventListener('change', function() {
    if (this.value === 'yes') {
        guestsGroup.style.display = 'block';
        document.getElementById('guests').required = true;
    } else {
        guestsGroup.style.display = 'none';
        document.getElementById('guests').required = false;
    }
});

// Initially hide guests field
guestsGroup.style.display = 'none';

// Handle form submission
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        attendance: document.getElementById('attendance').value,
        guests: document.getElementById('guests').value,
        dietary: document.getElementById('dietary').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.attendance) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    console.log('RSVP Form Data:', formData);
    
    // Show success message
    showFormMessage('Thank you for your RSVP! We have received your response.', 'success');
    
    // Reset form after 2 seconds
    setTimeout(() => {
        rsvpForm.reset();
        guestsGroup.style.display = 'none';
        hideFormMessage();
    }, 3000);
});

function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
}

function hideFormMessage() {
    const messageDiv = document.getElementById('form-message');
    messageDiv.style.display = 'none';
}

// Gallery Image Hover Effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Placeholder for future lightbox functionality
        console.log('Gallery item clicked');
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.story-item, .event-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});