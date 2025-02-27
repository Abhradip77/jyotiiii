document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    let noClickCount = 0;
    const noMessages = ["Still no?", "Think again!", "I'll die 💔", "You're breaking my heart 😭"];

    function playMusic() {
        music.volume = 0.5;
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    document.addEventListener("click", () => {
        playMusic();
    }, { once: true });

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
            document.getElementById("options").style.display = "none";
            startRainbowEffect();
        } else {
            if (noClickCount < noMessages.length) {
                document.getElementById("no-button").innerText = noMessages[noClickCount];
                noClickCount++;
            } else {
                document.getElementById("no-button").innerText = "Okay fine 😞";
            }
            document.getElementById("yes-button").style.fontSize = `${36 + noClickCount * 10}px`;
        }
    }

    function startRainbowEffect() {
        let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        let i = 0;
        setInterval(() => {
            document.getElementById("question").style.color = colors[i % colors.length];
            i++;
        }, 500);
    }

    window.startQuiz = startQuiz;
    window.showProposal = showProposal;
    window.selectOption = selectOption;
});
