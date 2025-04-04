document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all content sections
            contents.forEach(content => content.classList.remove("active"));

            // Remove active class from all tabs
            tabs.forEach(btn => btn.classList.remove("active"));

            // Get the target content ID from data attribute
            const targetId = this.getAttribute("data-tab");
            const targetContent = document.getElementById(targetId);

            // Activate the selected tab and content
            targetContent.classList.add("active");
            this.classList.add("active");
        });
    });
});

// Function to detect scroll and add the 'visible' class when About Me section comes into view
const aboutContent = document.querySelector('.about-me-content');

function handleScroll() {
    const rect = aboutContent.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.75) {
        aboutContent.classList.add('visible'); // Add 'visible' class to trigger fade-in
    }
}

// Call the function when scrolling
window.addEventListener('scroll', handleScroll);

// Call once on load to check if it's already in view
handleScroll();


