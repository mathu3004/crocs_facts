let facts = [
    "Crocodiles are reptiles that belong to the family Crocodylidae.",
    "They are known for their powerful jaws and sharp teeth.",
    "Crocodiles can live for over 70 years in the wild.",
    "They are ectothermic, meaning their body temperature is regulated by their environment.",
    "Crocodiles are excellent swimmers."
];

let attemptCount = 0;
const maxAttempts = 3;

const factDisplay = document.getElementById('factDisplay');
const button = document.getElementById('factButton');

button.addEventListener('click', () => {
    if (attemptCount < maxAttempts) {
        attemptCount++;
        if (attemptCount === maxAttempts) {
            alert("You can now click the button to get a fact!");
        }
    } else {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    }
});

// Move button when user approaches
document.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (mouseX > buttonRect.left && mouseX < buttonRect.right &&
        mouseY > buttonRect.top && mouseY < buttonRect.bottom) {
        button.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    }
});
