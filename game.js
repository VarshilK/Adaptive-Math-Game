// Variable tracking (basic global variables)
var currentDifficulty = 1; // 1 = Easy, 2 = Medium, 3 = Hard
var questionsAnswered = 0; // Tracks total questions asked (1 to 5)
var currentQuestionIndex = 1; // Stores current random question number

// Generates a random integer between min and max (inclusive)
function getRandomQuestionNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Updates level text on the screen
function updateLevelDisplay() {
    var levelLabel = document.getElementById("level");
    if (currentDifficulty == 1) {
        levelLabel.innerText = "Easy (Level 1)";
    } else if (currentDifficulty == 2) {
        levelLabel.innerText = "Medium (Level 2)";
    } else if (currentDifficulty == 3) {
        levelLabel.innerText = "Hard (Level 3)";
    }
}

// Starts or resets the 5-question test
function startGame() {
    currentDifficulty = 1;
    questionsAnswered = 0;
    
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("game-controls").style.display = "block";
    
    loadNextQuestion();
}

// Loads a random question from current difficulty pool
function loadNextQuestion() {
    // Check if test is finished (5 questions completed)
    if (questionsAnswered >= 5) {
        document.getElementById("demo").innerText = "Test Complete! Great job.";
        document.getElementById("game-controls").style.display = "none";
        document.getElementById("start-btn").style.display = "inline-block";
        document.getElementById("start-btn").innerText = "Restart Test";
        document.getElementById("feedback").innerText = "";
        return;
    }

    updateLevelDisplay();
    document.getElementById("feedback").innerText = "";
    document.getElementById("user-answer").value = "";
    
    // Pick a random question number (1 through 5)
    currentQuestionIndex = getRandomQuestionNumber();
    
    // Get question string from allquestions.js
    var qText = choosequestion(currentDifficulty, currentQuestionIndex);
    document.getElementById("demo").innerText = qText;
}

// Evaluates user answer and adapts difficulty level
function submitAnswer() {
    var inputField = document.getElementById("user-answer");
    var userAns = inputField.value.trim().toUpperCase();
    
    // Simple check for valid input
    if (userAns != "A" && userAns != "B" && userAns != "C" && userAns != "D") {
        alert("Please enter A, B, C, or D.");
        return;
    }

    var correctAns = answerback(currentDifficulty, currentQuestionIndex);
    var feedback = document.getElementById("feedback");

    // Check correctness and scale difficulty
    if (userAns == correctAns) {
        feedback.innerText = "Correct! Increasing difficulty...";
        feedback.style.color = "green";
        
        // Increase difficulty if not already hard
        if (currentDifficulty < 3) {
            currentDifficulty = currentDifficulty + 1;
        }
    } else {
        feedback.innerText = "Incorrect! Correct answer was " + correctAns + ". Lowering difficulty...";
        feedback.style.color = "red";
        
        // Lower difficulty if not already easy
        if (currentDifficulty > 1) {
            currentDifficulty = currentDifficulty - 1;
        }
    }

    // Increment question count for 5-question limit
    questionsAnswered = questionsAnswered + 1;

    // Pause briefly so student sees feedback before next question loads
    setTimeout(loadNextQuestion, 1500);
}

