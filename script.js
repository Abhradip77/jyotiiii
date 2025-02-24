document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: 0 },
        { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: 3 },
        { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: 2 },
        { question: "My favourite team?", options: ["United", "Real Madrid", "Atletico Madrid", "Athletic Club"], answer: 1 },
        { question: "My fav top of yours?", options: ["Black Kissi one", "Pink one", "Yellow flower top", "White and pink kurta top"], answer: 3 }
    ];

    let currentQuestion = 0;
    const quizContainer = document.getElementById("quiz-options");
    const questionElement = document.getElementById("quiz-question");
    const nextButton = document.getElementById("next-button");

    function loadQuestion() {
        quizContainer.innerHTML = "";
        questionElement.textContent = quizData[currentQuestion].question;

        quizData[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = function() {
                if (index === quizData[currentQuestion].answer) {
                    button.style.backgroundColor = "green";
                    currentQuestion++;
                    if (currentQuestion < quizData.length) {
                        setTimeout(loadQuestion, 1000);
                    } else {
                        nextButton.classList.remove("hidden");
                    }
                } else {
                    button.style.backgroundColor = "red";
                }
            };
            quizContainer.appendChild(button);
        });
    }

    function goToQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        loadQuestion();
    }

    function goToProposal() {
        document.getElementById("quiz-page").classList.add("hidden");
        document.getElementById("proposal-page").classList.remove("hidden");
    }

    function showYes() {
        document.getElementById("gif").src = "cat-heart.gif";
        document.getElementById("proposal-page").style.animation = "rainbowFlash 1s infinite alternate";
    }

    window.goToQuiz = goToQuiz;
    window.goToProposal = goToProposal;
    window.showYes = showYes;
});
