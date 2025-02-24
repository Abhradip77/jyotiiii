// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        let yesButton = document.getElementById('yes-button');
        let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + 'px';
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    let colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    let interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '<img src="cat-heart.gif" alt="Cat Heart">';
    document.getElementById('options').style.display = 'none';
}

// Countdown Timer for Feb 28, 2025, at 3:30 PM
function updateCountdown() {
    let eventDate = new Date('February 28, 2025 15:30:00').getTime();
    let timer = setInterval(function() {
        let now = new Date().getTime();
        let distance = eventDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerText = "It's Time!";
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = `${days} days ${hours}h ${minutes}m ${seconds}s left`;
    }, 1000);
}

updateCountdown();
