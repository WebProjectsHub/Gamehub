// Create some subtle animated background effects
function startBackgroundEffects() {
    const body = document.body;
    setInterval(() => {
        body.style.backgroundColor = `rgb(
            ${10 + Math.floor(Math.random() * 10)},
            ${10 + Math.floor(Math.random() * 10)},
            ${10 + Math.floor(Math.random() * 10)}
        )`;
        setTimeout(() => {
            body.style.backgroundColor = "#0a0a0a";
        }, 500);
    }, 15000); // Every 15 seconds
}

startBackgroundEffects();
