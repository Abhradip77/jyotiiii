document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: 0 },
        { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: 3 },
        { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: 2 },
        { question: "My favourite team?", options: ["United", "Real Madrid", "Atletico Madrid", "Athletic Club"], answer: 1 },
        { question: "My fav top of yours?", options: ["Black Kissi one", "Pink one", "Yellow flower top", "White and pink kurta top"], answer: 3 }
    ];

    let currentQuestion = 0;
    const quizContainer = document.getElementById("quiz-container");
    const nextButton = document.getElementById("next-button");
    const bgMusic = document.getElementById("bg-music");

    function loadQuestion() {
        quizContainer.innerHTML = "";
        const data = quizData[currentQuestion];
        const questionElement = document.createElement("p");
        questionElement.textContent = data.question;
        quizContainer.appendChild(questionElement);

        data.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = function() {
                if (index === data.answer) {
                    button.style.backgroundColor = "green";
                    setTimeout(() => {
                        currentQuestion++;
                        if (currentQuestion < quizData.length) {
                            loadQuestion();
                        } else {
                            nextButton.classList.remove("hidden");
                        }
                    }, 1000);
                } else {
                    button.style.backgroundColor = "red";
                    setTimeout(() => {
                        button.style.backgroundColor = "";
                    }, 1000);
                }
            };
            quizContainer.appendChild(button);
        });
    }

    function goToQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        loadQuestion();
        bgMusic.play(); // Ensure music continues
    }

    function goToProposal() {
        document.getElementById("quiz-page").classList.add("hidden");
        document.getElementById("proposal-page").classList.remove("hidden");
        bgMusic.play(); // Ensure music plays on proposal page
    }

    function acceptProposal() {
        document.getElementById("proposal-bg").classList.add("proposal-accepted");
        document.body.classList.add("flash");
        document.getElementById("cat-img").src = "cat-heart.gif";
    }

    window.goToQuiz = goToQuiz;
    window.goToProposal = goToProposal;
    window.acceptProposal = acceptProposal;
});
