let difficulty = 1;
let ql = 1;
let correctCount = 0;
const difficulty_name=["beginner","normal","master"];
function startGame() {
    document.getElementById("start-page").hidden = true;
    document.getElementById("game-page").hidden = false;
    showQuestion();
}

function myFunction() {
    if (!answercheck()) return;
    if (ql === 5) {
        showSummary();
        return;
    }
    ql++;
    showQuestion();
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function answercheck() {
    const answer_player = document.getElementById("answer").value.trim().toUpperCase();
    const correctAnswer = answerback(difficulty, ql);
    if (!["A", "B", "C", "D"].includes(answer_player)) {
        alert("Please enter A, B, C, or D");
        return false;
    }

    if (answer_player === correctAnswer) {
    correctCount++;
    difficulty = Math.min(3, difficulty + 1);
    alert("You are correct!");
    }
    else {
        difficulty = Math.max(1, difficulty - 1);
        alert("You are wrong! The correct answer is " + correctAnswer);
    }

    return true;
}

function showQuestion() {
    document.getElementById("demo").innerText =
        choosequestion(difficulty, ql);
}

function showSummary() {
    document.getElementById("game-page").hidden = true;
    document.getElementById("summary-page").hidden = false;

    document.getElementById("result").innerText =
        "Correct answers: " + correctCount + " / 5" +
        "\nFinal level: " + difficulty_name[difficulty-1];
}

