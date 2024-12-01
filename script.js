// validimi 
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Please fill in all fields.");
        e.preventDefault();  // Prevent form submission
    }
});
// smooth 
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
