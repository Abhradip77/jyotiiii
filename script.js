document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        console.log("Promise button clicked!"); // Debugging log
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
        const loveMessage = document.getElementById("love-message");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            backgroundPic.classList.remove("hidden");
            loveMessage.classList.remove("hidden");

            // Add rainbow flashing effect
            document.body.style.animation = "rainbowFlash 1s infinite alternate";

            // Hide buttons after yes
            document.getElementById("options").style.display = "none";
        } else {
            let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
            let currentNoText = noButton.innerText;
            let newTextIndex = noTexts.indexOf(currentNoText) + 1;
            if (newTextIndex >= noTexts.length) newTextIndex = 0;
            noButton.innerText = noTexts[newTextIndex];
            yesButton.style.fontSize = `${parseInt(window.getComputedStyle(yesButton).fontSize) + 5}px`;
        }
    }

    function updateCountdown() {
        const countdownElement = document.getElementById("countdown");
        const eventDate = new Date("February 28, 2025 14:00:00").getTime();
        
        function updateTimer() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;

            if (timeLeft <= 0) {
                countdownElement.innerHTML = "It's time!";
                clearInterval(timer);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateTimer();
        const timer = setInterval(updateTimer, 1000);
    }

    updateCountdown();

    // Ensure the function is globally accessible
    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
});
