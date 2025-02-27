document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    let timerStarted = false;

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();
        loadQuiz();
    }

    function loadQuiz() {
        const quizData = [
            { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: "19 Sep" },
            { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: "Pop Tates" },
            { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: "Scorpio" },
            { question: "My favourite team?", options: ["United", "Real Madrid", "Atletico Madrid", "Athletic Club"], answer: "Real Madrid" },
            { question: "My fav top of yours?", options: ["Black kissi one", "Pink one", "Yellow flower top", "White and pink kurta top"], answer: "White and pink kurta top" }
        ];

        const quizContainer = document.getElementById("questions");
        quizContainer.innerHTML = "";

        quizData.forEach((q, index) => {
            let div = document.createElement("div");
            div.classList.add("question");
            div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

            q.options.forEach(opt => {
                let btn = document.createElement("button");
                btn.innerText = opt;
                btn.onclick = () => checkAnswer(btn, opt, q.answer);
                div.appendChild(btn);
            });

            quizContainer.appendChild(div);
        });
    }

    function checkAnswer(button, selected, correct) {
        if (selected === correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        checkAllAnswers();
    }

    function checkAllAnswers() {
        let allCorrect = [...document.querySelectorAll(".question")].every(q => 
            [...q.children].some(btn => btn.classList.contains("correct"))
        );
        
        document.getElementById("next-button").style.display = allCorrect ? "block" : "none";
    }

    function nextPage(url) {
        window.location.href = url;
    }

    function selectOption(option) {
        const catImg = document.getElementById("main-image");
        const noButton = document.getElementById("no-button");
        const yesButton = document.getElementById("yes-button");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            document.body.style.animation = "rainbowFlash 1s infinite alternate";
            document.getElementById("options").style.display = "none";

            if (!timerStarted) {
                startCountdown();
                timerStarted = true;
            }
        } else {
            let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
            let currentNoText = noButton.innerText;
            let newTextIndex = (noTexts.indexOf(currentNoText) + 1) % noTexts.length;
            noButton.innerText = noTexts[newTextIndex];

            let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize + 5}px`;
        }
    }

    function startCountdown() {
        const countdownDate = new Date("Feb 28, 2025 14:00:00").getTime();
        const timerElement = document.createElement("div");
        timerElement.id = "timer";
        document.body.appendChild(timerElement);

        const countdownInterval = setInterval(function () {
            let now = new Date().getTime();
            let timeLeft = countdownDate - now;

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            timerElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                timerElement.innerHTML = "It's prom time! 🎉";
            }
        }, 1000);
    }

    window.startQuiz = startQuiz;
    window.nextPage = nextPage;
    window.selectOption = selectOption;
});
