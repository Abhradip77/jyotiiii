function nextPage(url) {
    window.location.href = url;
}

function checkAnswer(button, correctOption) {
    let parentDiv = button.parentElement;
    let correctAnswer = parentDiv.getAttribute('data-answer');

    if (button.innerText[0].toLowerCase() === correctAnswer) {
        button.style.backgroundColor = "green";
        button.disabled = true;
    } else {
        button.style.backgroundColor = "red";
    }

    // Check if all answers are correct
    let allCorrect = document.querySelectorAll(".question button[style='background-color: green;']").length === 5;
    if (allCorrect) {
        document.getElementById("next-button").style.display = "block";
    }
}
