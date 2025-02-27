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
        const countdownDiv = document.getElementById("countdown");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            document.body.style.animation = "rainbowFlash 1s infinite alternate";
            document.getElementById("options").style.display = "none";
            countdownDiv.classList.remove("hidden");
            startCountdown();
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

    function startCountdown() {
        const eventDate = new Date("2025-02-28T14:00:00+05:30").getTime();
        setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerText = 
                    `Time left until prom: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                document.getElementById("countdown").innerText = "It's prom time!";
            }
        }, 1000);
    }

    function checkAnswers() {
        const correctAnswers = ["19 sep", "pop tates", "scorpio", "real madrid", "white and pink kurta top"];
        let allCorrect = true;
        
        document.querySelectorAll(".question").forEach((questionDiv, index) => {
            const selected = questionDiv.querySelector("input:checked");
            if (selected) {
                if (selected.value === correctAnswers[index]) {
                    selected.parentElement.style.backgroundColor = "green";
                } else {
                    selected.parentElement.style.backgroundColor = "red";
                    allCorrect = false;
                }
            } else {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            document.getElementById("next-button").classList.remove("hidden");
        }
    }

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
    window.checkAnswers = checkAnswers;
});

