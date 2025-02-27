document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const promisePage = document.getElementById("promise-page");
    const quizPage = document.getElementById("quiz-page");
    const proposalPage = document.getElementById("proposal-page");
    const quizContainer = document.getElementById("questions");
    const nextButton = document.getElementById("next-button");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        console.log("Promise button clicked - transitioning to Quiz Page.");
        promisePage.style.display = "none";
        quizPage.style.display = "flex";
        playMusic();
    }

    function showProposal() {
        console.log("Quiz completed - transitioning to Proposal Page.");
        quizPage.style.display = "none";
        proposalPage.style.display = "flex";
        playMusic();
    }

    function selectOption(option) {
        const backgroundPic = document.getElementById("background-pic");
        const catImg = document.getElementById("cat-img");
        const noButton = document.getElementById("no-button");
        const yesButton = document.getElementById("yes-button");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            document.body.classList.add("rainbow-flash");
            document.getElementById("options").style.display = "none";
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
            nextButton.style.display = "block";
        }
    }

    const quizData = [
        { question: "When did we go official?", options: ["19 sep", "18 sep", "15 sep", "16 sep"] },
        { question: "Our fav spot?", options: ["si nonnas", "dailys", "high garden", "pop tates"] },
        { question: "My birth sign?", options: ["capricon", "sagittarius", "scorpio", "cancer"] },
        { question: "My favourite team?", options: ["united", "real madrid", "atletico madrid", "atletic club"] },
        { question: "My fav top of yours?", options: ["black kissi one", "pink one", "yellow flower top", "white and pink kurta top"] }
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

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
    window.checkAnswers = checkAnswers;
});
