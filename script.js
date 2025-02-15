const facts = [
    { fact: "Honey never spoils." },
    { fact: "Bananas are berries." },
    { fact: "A group of flamingos is called a 'flamboyance'." },
    { fact: "Octopuses have three hearts." },
    { fact: "Wombat poop is cube-shaped." }
];

let attempts = 0;
const factDisplay = document.getElementById('factDisplay');
const factButton = document.getElementById('factButton');

factButton.addEventListener('click', () => {
    if (attempts < 3) {
        attempts++;
        factDisplay.textContent = "You need to get closer to the button!";
        moveButton();
    } else {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex].fact;
        attempts = 0; // Reset attempts after a successful click
    }
});

function moveButton() {
    const randomX = Math.random() * (window.innerWidth - 100); // 100 is button width
    const randomY = Math.random() * (window.innerHeight - 50); // 50 is button height
    factButton.style.position = 'absolute';
    factButton.style.left = `${randomX}px`;
    factButton.style.top = `${randomY}px`;
}

// Optional: Move button on mouse proximity
document.addEventListener('mousemove', (event) => {
    const buttonRect = factButton.getBoundingClientRect();
    const distance = Math.sqrt(
        Math.pow(event.clientX - (buttonRect.left + buttonRect.width / 2), 2) +
        Math.pow(event.clientY - (buttonRect.top + buttonRect.height / 2), 2)
    );

    if (distance < 200) { // If mouse is within 200px of the button
        moveButton();
    }
});
