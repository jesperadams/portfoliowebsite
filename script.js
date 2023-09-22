// Function to smoothly scroll to the target section
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth" // Smooth scrolling behavior
        });
    }
}

// Attach click event listeners to the navigation links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        const targetId = link.getAttribute("href");
        smoothScroll(targetId);
    });
});

document.getElementById('contact-btn').addEventListener('click', function () {
    const emailAddress = 'adams.jesper@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
});

const changingWord = document.getElementById('changing-word');
const words = ['mobile apps', 'webapps', 'dashboards', 'experiences']; // Words to transition
let currentWordIndex = 0;

function changeWord() {
    changingWord.style.opacity = 0; // Fade out
    setTimeout(() => {
        changingWord.textContent = words[currentWordIndex];
        changingWord.style.opacity = 1; // Fade in
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 800); // Wait for fade out to complete
}

setInterval(changeWord, 4000);


document.getElementById('portfolio-btn').addEventListener('click', function() {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('behance-btn').addEventListener('click', function() {
    window.open('https://www.behance.net/jesperadams', '_blank');
});