document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    function playMusic() {
        music.play().catch(error => console.log("Music playback blocked:", error));
    }

    function startQuiz() {
        document.getElementById("promise-page").classList.add("hidden");
        document.getElementById("quiz-page").classList.remove("hidden");
        playMusic();

        const quizData = [
            { question: "When did we go official?", options: ["19 Sep", "18 Sep", "15 Sep", "16 Sep"], answer: "19 Sep" },
            { question: "Our fav spot?", options: ["Si Nonnas", "Dailys", "High Garden", "Pop Tates"], answer: "Pop Tates" },
            { question: "My birth sign?", options: ["Capricorn", "Sagittarius", "Scorpio", "Cancer"], answer: "Scorpio" },
            { question: "My favourite team?", options: ["United", "Real Madrid", "Atletico Madrid", "Athletic Club"], answer: "Real Madrid" },
            { question: "My fav top of yours?", options: ["Black kissi one", "Pink one", "Yellow flower top", "White and pink kurta top"], answer: "White and pink kurta top" }
        ];

        const quizContainer = document.getElementById("questions");
        quizContainer.innerHTML = ""; // Clear previous questions

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
    }

    function checkAnswer(button, selected, correct) {
        if (selected === correct) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
        checkAllAnswers();
    }

    function checkAllAnswers() {
        let allCorrect = [...document.querySelectorAll(".question")].every(q => 
            [...q.children].some(btn => btn.style.backgroundColor === "green")
        );
        
        document.getElementById("next-button").style.display = allCorrect ? "block" : "none";
    }

    function nextPage(url) {
        window.location.href = url;
    }

    window.startQuiz = startQuiz;
    window.nextPage = nextPage;
});
