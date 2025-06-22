document.addEventListener('DOMContentLoaded', () => {
    console.log('罗德岛档案页面加载完成！');

    const button = document.getElementById('interactButton');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked! Generating floating text.');
            createFloatingTexts(20); // Generate 20 floating texts
        });
    } else {
        console.error('Button with ID "interactButton" not found.');
    }
});

function createFloatingTexts(count) {
    for (let i = 0; i < count; i++) {
        const textElement = document.createElement('div');
        textElement.textContent = '23333';
        textElement.classList.add('floating-text');

        // Set random initial position within the viewport
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        textElement.style.left = `${startX}px`;
        textElement.style.top = `${startY}px`;

        // Set random translation values for animation (relative to start position)
        const translateX = (Math.random() - 0.5) * window.innerWidth * 1.5;
        const translateY = (Math.random() - 0.5) * window.innerHeight * 1.5;

        textElement.style.setProperty('--translate-x', `${translateX}px`);
        textElement.style.setProperty('--translate-y', `${translateY}px`);

        // Set random animation duration and delay slightly
        const duration = 3 + Math.random() * 3;
        const delay = Math.random() * 0.8;
        textElement.style.animationDuration = `${duration}s`;
        textElement.style.animationDelay = `${delay}s`;


        document.body.appendChild(textElement);

        // Remove the element after the animation finishes
        textElement.addEventListener('animationend', () => {
            textElement.remove();
        });
    }
}
