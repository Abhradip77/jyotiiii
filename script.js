document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music blocked:", error));
    }

    function startQuiz() {
        document.getElementById("quiz-container").classList.remove("hidden");
        playMusic();
    }

    function loadQuiz() {
        const quizData = [
            { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: "19 Sep" },
            { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: "Pop Tates" },
            { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: "Scorpio" },
            { question: "My favourite team?", options: ["United", "Real Madrid", "Atletico Madrid", "Athletic Club"], answer: "Real Madrid" },
            { question: "My fav top of yours?", options: ["Black kissi one", "Pink one", "Yellow flower top", "White and pink kurta top"], answer: "White and pink kurta top" }
        ];

        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = '<h2>Answer these questions correctly to continue...</h2>';

        quizData.forEach((q, index) => {
            let div = document.createElement("div");
            div.classList.add("question");
            div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

            q.options.forEach(opt => {
                let btn = document.createElement("button");
                btn.innerText = opt;
                btn.onclick = () => checkAnswer(btn, opt, q.answer);
                div.appendChild(btn);
            });

            quizContainer.appendChild(div);
        });

        // Add Next button at the end
        let nextButton = document.createElement("button");
        nextButton.id = "next-button";
        nextButton.innerText = "Next";
        nextButton.style.display = "none";
        nextButton.onclick = () => nextPage("Proposal.html");
        quizContainer.appendChild(nextButton);
    }

    function checkAnswer(button, selected, correct) {
        if (selected === correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        checkAllAnswers();
    }

    function checkAllAnswers() {
        let allCorrect = [...document.querySelectorAll(".question")].every(q => 
            [...q.children].some(btn => btn.classList.contains("correct"))
        );
        
        document.getElementById("next-button").style.display = allCorrect ? "block" : "none";
    }

    function nextPage(url) {
        window.location.href = url;
    }

    function selectOption(option) {
        const catImg = document.getElementById("main-image");
        const noButton = document.getElementById("no-button");
        const yesButton = document.getElementById("yes-button");

        if (option === "yes") {
            catImg.src = "cat-heart.gif";
            document.getElementById("options").style.display = "none";
        } else {
            let noTexts = ["Still no?", "I'll die", "Don't do this", "Are you sure?"];
            let currentNoText = noButton.innerText;
            let newTextIndex = (noTexts.indexOf(currentNoText) + 1) % noTexts.length;
            noButton.innerText = noTexts[newTextIndex];

            let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize + 5}px`;
        }
    }

    window.startQuiz = startQuiz;
    window.nextPage = nextPage;
    window.selectOption = selectOption;

    loadQuiz();
});
