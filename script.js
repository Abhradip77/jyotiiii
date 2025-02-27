document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();

        const quizContainer = document.getElementById("questions");
        if (quizContainer.children.length === 0) {
            const quizData = [
                { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: "19 Sep" },
                { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: "Pop Tates" },
                { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: "Scorpio" }
            ];

            quizData.forEach((q, index) => {
                let div = document.createElement("div");
                div.classList.add("question");
                div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
                q.options.forEach(opt => {
                    div.innerHTML += `<label><input type="radio" name="q${index}" value="${opt}" onchange="checkAnswers()"> ${opt}</label><br>`;
                });
                quizContainer.appendChild(div);
            });
        }
    }

    function selectOption(option) {
        if (option === "yes") {
            document.body.style.animation = "rainbowFlash 1s infinite alternate";
            document.getElementById("countdown").classList.remove("hidden");
            startCountdown();
        }
    }

    function startCountdown() {
        const eventDate = new Date("February 28, 2025 14:00:00").getTime();
        setInterval(function () {
            const now = new Date().getTime();
            const diff = eventDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById("countdown").innerText = `Prom in ${days} days!`;
        }, 1000);
    }

    window.startQuiz = startQuiz;
    window.selectOption = selectOption;
});
