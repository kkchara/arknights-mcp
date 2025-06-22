document.addEventListener('DOMContentLoaded', () => {
    console.log("罗德岛档案页面已加载.");

    const floatTextButton = document.getElementById('floatTextButton');
    const body = document.body;

    if (floatTextButton) { // Check if button exists
        floatTextButton.addEventListener('click', () => {
            const numberOfTexts = 30; // How many texts per click
            for (let i = 0; i < numberOfTexts; i++) {
                // Add a small delay between creating texts to make them scatter better initially
                setTimeout(() => {
                    createFloatingText('23333');
                }, i * 50); // 50ms delay between each text creation
            }
        });
    } else {
        console.error("Button with ID 'floatTextButton' not found.");
    }


    function createFloatingText(text) {
        const textElement = document.createElement('div');
        textElement.textContent = text;
        textElement.classList.add('floating-text');

        // Randomize initial position (within viewport)
        const startLeft = Math.random() * window.innerWidth; // px
        const startTop = Math.random() * window.innerHeight; // px
        textElement.style.left = `${startX}px`;
        textElement.style.top = `${startY}px`;

        // Randomize animation duration and delay slightly (delay is handled in the loop)
        const duration = Math.random() * 4 + 5; // 5-9 seconds total animation duration
        textElement.style.animationDuration = `${duration}s`;

        // Set random translation and rotation values via CSS variables for the animation end state
        // These values determine *how far* and *in which direction* the text moves relative to its start position.
        const dx = (Math.random() - 0.5) * window.innerWidth * 2; // Move up to 2 screen widths horizontally
        const dy = (Math.random() - 0.5) * window.innerHeight * 2; // Move up to 2 screen heights vertically
        const dr = (Math.random() - 0.5) * 720; // Rotate up to +/- 360 degrees

        textElement.style.setProperty('--dx', `${dx}px`);
        textElement.style.setProperty('--dy', `${dy}px`);
        textElement.style.setProperty('--dr', `${dr}deg`);

        body.appendChild(textElement);

        // Remove element after the animation finishes (duration)
        // Using animationend event is cleaner than setTimeout based on guessed duration+delay
        textElement.addEventListener('animationend', () => {
            textElement.remove();
        });
    }
});
