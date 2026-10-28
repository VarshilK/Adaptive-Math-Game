let difficulty = 1;
let ql = 1;

function myFunction() {
    if (!answercheck()) return;
    ql = ql % 5 + 1;
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
        difficulty = Math.min(3, difficulty + 1);
        alert("You are correct!");
    } else {
        difficulty = Math.max(1, difficulty - 1);
        alert("You are wrong! The correct answer is " + correctAnswer);
    }
    return true;
}

function showQuestion() {
    document.getElementById("demo").innerText =
        choosequestion(difficulty, ql);
}

showQuestion();
