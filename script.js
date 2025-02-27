document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded"); // Debugging

    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        console.log("Promise button clicked!"); // Debugging

        let promisePage = document.getElementById("promise-page");
        let quizPage = document.getElementById("quiz-page");

        if (!promisePage || !quizPage) {
            console.error("One or more elements not found!");
            return;
        }

        promisePage.style.display = "none"; // Hide first page
        quizPage.style.display = "block";  // Show quiz page
        playMusic();
    }

    function showProposal() {
        document.getElementById("quiz-page").style.display = "none";
        document.getElementById("proposal-page").style.display = "block";
        playMusic();
    }

    function selectOption(option) {
        const catImg = document.getElementById("cat-img");
        const loveMessage = document.getElementById("love-message");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            loveMessage.style.display = "block"; // Show "I love you Jyoti"
        } else {
            let noButton = document.getElementById("no-button");
            let yesButton = document.getElementById("yes-button");

            let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
            let currentNoText = noButton.innerText;
            let newTextIndex = noTexts.indexOf(currentNoText) + 1;
            if (newTextIndex >= noTexts.length) newTextIndex = 0;
            noButton.innerText = noTexts[newTextIndex];
            yesButton.style.fontSize = `${parseInt(window.getComputedStyle(yesButton).fontSize) + 5}px`;
        }
    }

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
});
