document.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelectorAll(".question");
    let answeredCorrectly = 0;

    // Function to check answer in MCQ
    window.checkAnswer = function (button, answer) {
        let question = button.parentElement;
        let correctAnswer = question.getAttribute("data-answer");

        if (answer === correctAnswer) {
            button.style.backgroundColor = "lightgreen";
            button.style.color = "black";
            answeredCorrectly++;
        } else {
            button.style.backgroundColor = "red";
            button.style.color = "white";
        }

        if (answeredCorrectly === questions.length) {
            document.getElementById("next-button").style.display = "block";
        }
    };

    // Function to go to next page
    window.nextPage = function (page) {
        window.location.href = page;
    };

    // Function when selecting Yes or No in Proposal.html
    window.selectOption = function (choice) {
        let image = document.getElementById("main-image");
        let questionText = document.getElementById("question");

        if (choice === "yes") {
            image.src = "cat-heart.gif";
            questionText.innerText = "Yay! You made my day! 💖";
            playMusic();
        } else {
            image.src = "our-pic.jpg";
            questionText.innerText = "Oh no! You broke my heart 💔 But I still love you!";
        }
    };

    // Function to play music
    function playMusic() {
        let music = document.getElementById("background-music");
        music.play().catch(error => console.log("Autoplay failed:", error));
    }

    // Function to handle promise button click
    window.startPromise = function () {
        let promiseButton = document.getElementById("promise-button");
        promiseButton.innerText = "I Promise to Always Love You ❤️";
        promiseButton.disabled = true; // Disable after clicking
    };
});
