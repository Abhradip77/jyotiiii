document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();
    }

    function showProposal() {
        document.getElementById("quiz-page").classList.add("hidden");
        document.getElementById("proposal-page").classList.remove("hidden");
        playMusic();
    }

    function selectOption(option) {
        const backgroundPic = document.getElementById("background-pic");
        const catImg = document.getElementById("cat-img");
        const noButton = document.getElementById("no-button");
        const yesButton = document.getElementById("yes-button");
        const countdown = document.getElementById("countdown");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";

            // Rainbow flashing effect
            document.body.style.animation = "rainbowFlash 1s infinite alternate";

            // Hide buttons
            document.getElementById("options").style.display = "none";

            // Show countdown
            countdown.classList.remove("hidden");
            startCountdown();
        } else {
            // Change "No" button text on multiple clicks
            let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
            let currentNoText = noButton.innerText;

            let newTextIndex = noTexts.indexOf(currentNoText) + 1;
            if (newTextIndex >= noTexts.length) newTextIndex = 0;

            noButton.innerText = noTexts[newTextIndex];

            // Increase "Yes" button size
            let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize + 5}px`;
        }
    }

    function startCountdown() {
        const eventTime = new Date("February 28, 2025 14:00:00 GMT+0530").getTime();

        function updateTimer() {
            const now = new Date().getTime();
            const timeLeft = eventTime - now;

            if (timeLeft <= 0) {
                document.getElementById("countdown").innerHTML = "🎉 IT'S PROM TIME! 🎉";
                document.body.style.animation = "none";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `Prom Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

            setTimeout(updateTimer, 1000);
        }

        updateTimer();
    }

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
});
