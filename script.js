document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    window.startQuiz = function () {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();
    };

    window.showProposal = function () {
        document.getElementById("quiz-page").classList.add("hidden");
        document.getElementById("proposal-page").classList.remove("hidden");
        playMusic();
    };

    window.selectOption = function (option) {
        const backgroundPic = document.getElementById("background-pic");
        const catImg = document.getElementById("cat-img");
        const noButton = document.getElementById("no-button");
        const yesButton = document.getElementById("yes-button");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            backgroundPic.classList.remove("hidden");

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
    };

    window.checkAnswers = function () {
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
    };

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
});
