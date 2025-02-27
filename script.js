document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        console.log("Promise button clicked!"); // Debugging

        let promisePage = document.getElementById("promise-page");
        let quizPage = document.getElementById("quiz-page");

        if (!promisePage || !quizPage) {
            console.error("One or more elements not found!");
            return;
        }

        promisePage.classList.add("hidden");
        quizPage.classList.remove("hidden");

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

        if (!backgroundPic) {
            console.error("background-pic element not found");
            return;
        }

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            backgroundPic.classList.remove("hidden");
            document.body.style.animation = "rainbowFlash 1s infinite alternate";
            document.getElementById("options").style.display = "none";
            loveMessage.classList.remove("hidden");
        } else {
            let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
            let currentNoText = noButton.innerText;

            let newTextIndex = noTexts.indexOf(currentNoText) + 1;
            if (newTextIndex >= noTexts.length) newTextIndex = 0;

            noButton.innerText = noTexts[newTextIndex];

            let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize + 5}px`;
        }
    }

    function checkAnswers() {
        const correctAnswers = ["19 sep", "pop tates", "scorpio", "real madrid", "white and pink kurta top"];
        let allCorrect = true;

        document.querySelectorAll(".question").forEach((questionDiv, index) => {
            const selected = questionDiv.querySelector("input:checked");
            if (!selected || selected.value !== correctAnswers[index]) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            document.getElementById("next-button").classList.remove("hidden");
        }
    }

    function countdown() {
        const eventDate = new Date("Feb 28, 2025 14:00:00").getTime();
        const countdownElement = document.getElementById("countdown");

        setInterval(function () {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                countdownElement.innerHTML = "Time's up!";
                return;
            }

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    countdown();

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
});

