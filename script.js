document.addEventListener("DOMContentLoaded", function() {
    let music = document.getElementById("background-music");
    music.play();

    let quizContainer = document.getElementById("quiz-container");
    let nextButton = document.getElementById("next-button");

    let questions = [
        { question: "When did we go official?", options: ["19 sep", "18 sep", "15 sep", "16 sep"], answer: 0 },
        { question: "Our fav spot?", options: ["si nonnas", "dailys", "high garden", "pop tates"], answer: 3 },
        { question: "My birth sign?", options: ["capricon", "sagittarius", "scorpio", "cancer"], answer: 2 },
        { question: "My favourite team?", options: ["united", "real madrid", "atletico madrid", "atletic club"], answer: 1 },
        { question: "My fav top of yours?", options: ["black kissi one", "pink one", "yellow flower top", "white and pink kurta top"], answer: 3 }
    ];

    let correctAnswers = 0;

    questions.forEach((q, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach((option, i) => {
            let btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = function() {
                if (i === q.answer) {
                    btn.style.backgroundColor = "green";
                    correctAnswers++;
                } else {
                    btn.style.backgroundColor = "red";
                }
                checkAllCorrect();
            };
            div.appendChild(btn);
        });
        quizContainer.appendChild(div);
    });

    function checkAllCorrect() {
        if (correctAnswers === questions.length) {
            nextButton.classList.remove("hidden");
        }
    }
});

function goToQuiz() {
    document.getElementById("promise-page").classList.add("hidden");
    document.getElementById("quiz-page").classList.remove("hidden");
}

function goToProposal() {
    document.getElementById("quiz-page").classList.add("hidden");
    document.getElementById("proposal-page").classList.remove("hidden");
}

function selectOption(choice) {
    if (choice === "yes") {
        alert("Yay! 💖");
    } else {
        alert("Try again! 😜");
    }
}
