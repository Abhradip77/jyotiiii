document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();
        loadQuestions();
    }

    function showProposal() {
        document.getElementById("quiz-page").classList.add("hidden");
        document.getElementById("proposal-page").classList.remove("hidden");
        playMusic();
    }

    let noClickCount = 0;
    const noResponses = ["Still no?", "I'll die 💔", "Are you serious?", "Last chance!"];

    function selectOption(option) {
        if (option === "yes") {
            document.getElementById("cat-img").src = "cat-heart.gif";
            document.body.classList.add("rainbow-flash");
            setTimeout(() => document.body.classList.remove("rainbow-flash"), 2000);
            document.getElementById("options").style.display = "none";
        } else {
            if (noClickCount < noResponses.length) {
                document.getElementById("no-button").innerText = noResponses[noClickCount];
                noClickCount++;
            } else {
                document.getElementById("no-button").innerText = "Fine 😭";
            }
            document.getElementById("yes-button").style.fontSize = (28 + noClickCount * 6) + "px";
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

    function loadQuestions() {
        const quizData = [
            { question: "When did we go official?", options: ["19 sep", "18 sep", "15 sep", "16 sep"] },
            { question: "Our fav spot?", options: ["si nonnas", "dailys", "high garden", "pop tates"] },
            { question: "My birth sign?", options: ["capricorn", "sagittarius", "scorpio", "cancer"] },
            { question: "My favourite team?", options: ["united", "real madrid", "atletico madrid", "athletic club"] },
            { question: "My fav top of yours?", options: ["black kissi one", "pink one", "yellow flower top", "white and pink kurta top"] }
        ];

        const quizContainer = document.getElementById("questions");
        quizContainer.innerHTML = "";

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

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
    window.checkAnswers = checkAnswers;
});
