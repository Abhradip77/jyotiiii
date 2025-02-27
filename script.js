document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        if (music.paused) {
            music.play().catch(error => console.log("Music playback blocked:", error));
        }
    }

    // Ensure music continues playing after interaction
    document.body.addEventListener("click", playMusic);

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
        if (option === "yes") {
            document.getElementById("cat-img").src = "cat-heart.gif";
            document.getElementById("background-pic").classList.remove("hidden");

            // Activate rainbow effect
            document.body.classList.add("rainbow-flash");

            document.getElementById("options").style.display = "none";
        } else {
            let noButton = document.getElementById("no-button");
            if (noButton.innerText === "You sure?") {
                noButton.innerText = "Really sure?";
            } else if (noButton.innerText === "Really sure?") {
                noButton.innerText = "Think again!";
            } else if (noButton.innerText === "Think again!") {
                noButton.innerText = "Last chance!";
            } else {
                noButton.innerText = "Ok fine 😢";
                document.getElementById("yes-button").click(); // Auto-click "Yes" after last no
            }
        }
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

    // Quiz Data
    const quizData = [
        { question: "When did we go official?", options: ["19 sep", "18 sep", "15 sep", "16 sep"] },
        { question: "Our fav spot?", options: ["si nonnas", "dailys", "high garden", "pop tates"] },
        { question: "My birth sign?", options: ["capricon", "sagittarius", "scorpio", "cancer"] },
        { question: "My favourite team?", options: ["united", "real madrid", "atletico madrid", "atletic club"] },
        { question: "My fav top of yours?", options: ["black kissi one", "pink one", "yellow flower top", "white and pink kurta top"] }
    ];

    const quizContainer = document.getElementById("questions");
    quizData.forEach((q, index) => {
        let div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(opt => {
            div.innerHTML += `<label><input type="radio" name="q${index}" value="${opt}" onchange="checkAnswers()"> ${opt}</label><br>`;
        });
        quizContainer.appendChild(div);
    });

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
    window.checkAnswers = checkAnswers;
});
