document.addEventListener('DOMContentLoaded', () => {
    console.log('罗德岛档案页面加载完成！');

    const button = document.getElementById('interactButton');
    const body = document.body;

    button.addEventListener('click', () => {
        const numTexts = 15; // Number of texts to generate per click
        for (let i = 0; i < numTexts; i++) {
             const textElement = document.createElement('div');
             textElement.classList.add('floating-text');
             textElement.textContent = '23333';

             // Randomize start position horizontally, start from bottom
             const startX = Math.random() * window.innerWidth;
             const startY = window.innerHeight + 20; // Start just below the viewport

             textElement.style.left = `${startX}px`;
             textElement.style.top = `${startY}px`;
             // Note: position is already fixed in CSS .floating-text

             body.appendChild(textElement);

             // Animate
             // Use requestAnimationFrame to ensure the element is added before animating
             requestAnimationFrame(() => {
                  // Random end position and rotation
                  const endY = -textElement.clientHeight - Math.random() * window.innerHeight * 0.8; // Float off top, random extra Y
                  const endX = startX + (Math.random() - 0.5) * window.innerWidth * 0.8; // Random horizontal movement
                  const rotation = (Math.random() - 0.5) * 720; // Random rotation up to 720 degrees

                  // Apply the transformation and fade
                  // Translate is relative to the element's current position, which is set by left/top.
                  // So, translate(targetX - currentX, targetY - currentY)
                  // The horizontal movement from startX to endX is endX - startX.
                  // The vertical movement from startY to endY is endY - startY.
                  textElement.style.transform = `translate(${endX - startX}px, ${endY - startY}px) rotate(${rotation}deg)`;
                  textElement.style.opacity = '0';
             });

             // Remove the element after the animation finishes
             textElement.addEventListener('transitionend', () => {
                 textElement.remove();
             });
        }
    });
});
