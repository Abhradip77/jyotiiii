// Function to handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
            showBackgroundImage();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        let yesButton = document.getElementById('yes-button');
        let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + 'px';
    }
}

// Flashing rainbow background effect
function flashRainbowColors(callback) {
    let colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#ffe6f2'; // Reset
        if (callback) callback();
    }, 2000);
}

// Display cat.gif initially
function displayCat() {
    let imgElement = document.getElementById('main-image');
    imgElement.src = 'cat.gif';
}

// Change image to cat-heart.gif when "Yes" is clicked
function displayCatHeart() {
    let imgElement = document.getElementById('main-image');
    imgElement.src = 'cat-heart.gif';
    document.getElementById('options').style.display = 'none';
}

// Show background image with fade-in effect
function showBackgroundImage() {
    let bgImage = document.getElementById('background-image');
    bgImage.style.opacity = '0.3'; // Set transparency to 30%
}

// Countdown Timer
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let targetDate = new Date('February 28, 2025 15:30:00').getTime();

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        if (timeLeft > 0) {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `⏳ Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerHTML = "🎉 It's Prom Time! 🎉";
        }
    }

    setInterval(updateCountdown, 1000);
}

// Run functions on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCat();
    startCountdown();
});
