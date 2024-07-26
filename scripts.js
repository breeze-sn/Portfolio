document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    let currentSection = '';

    document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.classList.remove('active');
        if (anchor.getAttribute('href').includes(currentSection)) {
            anchor.classList.add('active');
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});

// Force download of the resume
document.getElementById('download-resume').addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'YourName_Resume.pdf';
    link.click();
});

// Function to add 'active' class to navigation links based on scroll position
function setActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', setActiveLink);

// Initial call to setActiveLink to highlight correct nav link on page load
setActiveLink();
