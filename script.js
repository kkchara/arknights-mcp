console.log("罗德岛档案页面已加载.");

const floatButton = document.getElementById('floatButton');
const container = document.body; // 将文字添加到 body 中

floatButton.addEventListener('click', () => {
    const text = "23333";
    const numberOfTexts = 15; // 每次点击生成15个文字

    for (let i = 0; i < numberOfTexts; i++) {
        const textElement = document.createElement('div');
        textElement.textContent = text;
        textElement.classList.add('floating-text');

        // 设置随机水平位置 (例如，在视口宽度的 10% 到 90% 之间)
        const randomLeft = Math.random() * 80 + 10; // 10vw to 90vw
        textElement.style.setProperty('--start-left', `${randomLeft}vw`);

        // 添加一个轻微的随机延迟，让文字不是同时开始飘
        const randomDelay = Math.random() * 1; // up to 1 second delay
        textElement.style.animationDelay = `${randomDelay}s`;

        container.appendChild(textElement);

        // 动画结束后移除元素，防止 DOM 节点过多
        textElement.addEventListener('animationend', () => {
            textElement.remove();
        });
    }
});
