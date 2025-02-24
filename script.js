document.addEventListener("DOMContentLoaded", function () {
    // Start background music
    const audio = document.getElementById("background-music");
    audio.play().catch(() => {
        console.log("Autoplay blocked. User must interact first.");
    });

    // Quiz questions
    const questions = [
        { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: "19 Sep" },
        { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: "Pop Tates" },
        { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: "Scorpio" },
        { question: "My favorite team?", options: ["United", "Real Madrid", "Atletico Madrid", "Atletic Club"], answer: "Real Madrid" },
        { question: "My fav top of yours?", options: ["Black Kissi One", "Pink One", "Yellow Flower Top", "White & Pink Kurta Top"], answer: "White & Pink Kurta Top" }
    ];

    let correctAnswers = [];
    let quizContainer = document.getElementById("quiz-container");

    // Generate quiz
    questions.forEach((q, index) => {
        let div = document.createElement("div");
        div.classList.add("quiz-question");
        div.innerHTML = `<p>${q.question}</p>`;
        
        q.options.forEach(option => {
            let button = document.createElement("button");
            button.innerText = option;
            button.onclick = function () {
                if (option === q.answer) {
                    button.style.backgroundColor = "green";
                    correctAnswers[index] = true;
                } else {
                    button.style.backgroundColor = "red";
                    correctAnswers[index] = false;
                }
                checkQuizCompletion();
            };
            div.appendChild(button);
        });

        quizContainer.appendChild(div);
    });

    function checkQuizCompletion() {
        if (correctAnswers.length === questions.length && correctAnswers.every(a => a === true)) {
            document.getElementById("next-button").classList.remove("hidden");
        }
    }
});

// Function to navigate pages
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

// Proposal logic
function selectOption(option) {
    if (option === "yes") {
        document.getElementById("image-container").style.background = "url('our-pic.jpg') center/cover no-repeat";
        document.getElementById("image-container").style.opacity = "0.3";
        document.getElementById("cat-img").src = "cat-heart.gif";
    } else {
        document.getElementById("no-button").innerText = "You sure?";
        let yesButton = document.getElementById("yes-button");
        yesButton.style.fontSize = parseFloat(window.getComputedStyle(yesButton).fontSize) * 2 + "px";
    }
}
