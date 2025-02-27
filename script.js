document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        if (music) {
            music.play().catch(error => console.log("Music playback blocked:", error));
        }
    }

    function checkAnswer(button, correctAnswer) {
        const parentDiv = button.parentElement;
        const correct = parentDiv.getAttribute("data-answer");

        if (correct === correctAnswer) {
            button.style.backgroundColor = "#4CAF50"; // Green for correct
            button.style.color = "white";
            button.disabled = true;
        } else {
            button.style.backgroundColor = "#d9534f"; // Red for incorrect
            button.style.color = "white";
        }

        // Check if all are answered correctly
        const allAnswered = [...document.querySelectorAll(".question")].every(q =>
            [...q.children].some(btn => btn.style.backgroundColor === "rgb(76, 175, 80)")
        );

        if (allAnswered) {
            document.getElementById("next-button").style.display = "block";
        }
    }

    function nextPage(page) {
        window.location.href = page;
    }

    function selectOption(option) {
        const mainImage = document.getElementById("main-image");
        const yesButton = document.getElementById("yes-button");
        const noButton = document.getElementById("no-button");

        if (option === "yes") {
            mainImage.src = "cat-heart.gif";
            document.body.style.backgroundColor = "#ffccff";
            document.getElementById("options").style.display = "none";

            playMusic();
        } else {
            let noTexts = ["Still no?", "I'll cry 😢", "Think again!", "Really?"];
            let currentNoText = noButton.innerText;
            let index = noTexts.indexOf(currentNoText) + 1;
            if (index >= noTexts.length) index = 0;
            noButton.innerText = noTexts[index];

            // Increase Yes button size
            let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize + 5}px`;
        }
    }

    function startPromise() {
        alert("Promise me to dance with me at prom 💃🕺");
    }

    window.checkAnswer = checkAnswer;
    window.nextPage = nextPage;
    window.selectOption = selectOption;
    window.startPromise = startPromise;
});
