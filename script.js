document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    document.querySelector("#promise-page button").addEventListener("click", function () {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();
    });

    document.getElementById("next-button").addEventListener("click", function () {
        document.getElementById("quiz-page").classList.add("hidden");
        document.getElementById("proposal-page").classList.remove("hidden");
        playMusic();
    });

    document.getElementById("yes-button").addEventListener("click", function () {
        document.getElementById("cat-img").src = "cat-heart.gif";
        document.body.classList.add("rainbow-flash");
        document.getElementById("options").style.display = "none";
    });

    document.getElementById("no-button").addEventListener("click", function () {
        let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
        let currentText = this.innerText;
        let newIndex = (noTexts.indexOf(currentText) + 1) % noTexts.length;
        this.innerText = noTexts[newIndex];

        let yesButton = document.getElementById("yes-button");
        yesButton.style.fontSize = `${parseInt(window.getComputedStyle(yesButton).fontSize) + 5}px`;
    });
});
\
