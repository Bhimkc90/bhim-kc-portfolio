// Reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, 
{
    threshold: 0.2
});

revealElements.forEach((element) => {
    observer.observe(element);
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                formMessage.textContent = "Thank you. Your message has been sent.";
                formMessage.style.color = "#f5c542";
                contactForm.reset();
            } else {
                formMessage.textContent = "Something went wrong. Please try again.";
                formMessage.style.color = "red";
            }
        } catch (error) {
            formMessage.textContent = "Network error. Please try again later.";
            formMessage.style.color = "red";
        }
    });
}