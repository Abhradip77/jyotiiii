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
