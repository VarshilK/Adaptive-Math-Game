let difficulty = 1;
let ql = 1;
let qll = 0;
let correctCount = 0;
const skill_name=["noob","noob","noob","pro","pro","god"];
const choicename=["A","B","C","D"];
let answered = false;
let Questionbook=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let isLight = false;
const leaderboard=[];
let startTime=0;
let endTime=0;
let timerInterval=null;

function pickQuestion() {
    do {
        qll = Math.floor(Math.random() * 5) + 1;
    } while (Questionbook[(difficulty - 1) * 5 + qll]);
    Questionbook[(difficulty - 1) * 5 + qll] = 1;
}

function startGame() {
    if(document.getElementById("playername").value.trim().length<=0)return;
    function updateTimer(){
        let timeUsed=Math.floor((Date.now()-startTime)/1000);
        document.getElementById("timer").innerText=
        "time:"+timeUsed+"seconds";
    }
    startTime=Date.now();
    timerInterval=setInterval(updateTimer,1000);
    document.getElementById("start-page").hidden = true;
    document.getElementById("game-page").hidden = false;
    pickQuestion();
    showQuestion();
}

function myFunction(choice) {
    if(answered) return;
    answered = true;
    answercheck(choice);
    document.getElementById("nextque").hidden = false;
}

function answercheck(answer_player) {
    const correctAnswer = answerback(difficulty, qll);
    document.getElementById("ql" + correctAnswer).classList.add("green");
    if (choicename[answer_player-1] === correctAnswer) {
        correctCount++;
        difficulty = Math.min(3, difficulty + 1);
        
    }
    else {
        document.getElementById("ql" + choicename[answer_player-1]).classList.add("red");
        difficulty = Math.max(1, difficulty - 1);
    }

    return true;
}

function showQuestion() {
    document.getElementById("demo").innerText =
        "Question " + ql + " : " + choosequestion(difficulty, qll);
}

function showSummary() {
    document.getElementById("game-page").hidden = true;
    document.getElementById("summary-page").hidden = false;
    let timeUsed=(endTime-startTime)/1000;
    let timeScore=100/(1+timeUsed/60);
    let accuracyScore=(correctCount/5)*100;
    let finalScore=0.7*accuracyScore+0.3*timeScore;

    document.getElementById("result").innerText =
        "Correct answers: " + correctCount + " / 5" +
        "\nTime used:"+timeUsed.toFixed(1)+"seconds"+
        "\nAccuracy Score:"+accuracyScore.toFixed(1)+
        "\nTime Score:"+timeScore.toFixed(1)+
        "\nFinal Score:"+finalScore.toFixed(1)+
        "\nFinal level:"+skill_name[Math.floor(finalScore/18)];

    updateLeaderboard(finalScore, timeUsed);
}

function clearColors() {
    document.getElementById("qlA").className = "";
    document.getElementById("qlB").className = "";
    document.getElementById("qlC").className = "";
    document.getElementById("qlD").className = "";
}

function nextQuestion(){
    answered = false;
    document.getElementById("nextque").hidden = true;
    clearColors();
    if (ql === 5) {
        endTime=Date.now();
        clearInterval(timerInterval);
        showSummary();
        return;
    }
    ql++;
    if(ql === 5){
        document.getElementById("nextque").innerText = "Finish";
    }
    pickQuestion();
    showQuestion();
}

function restart(){
    clearInterval(timerInterval);
    timerInterval=null;
    document.getElementById("timer").innerText="Time:0 seconds";
    document.getElementById("game-page").hidden = true;
    document.getElementById("summary-page").hidden = true;
    document.getElementById("start-page").hidden = false;
    ql = 1;
    difficulty = 1;
    correctCount = 0;
    answered = false;
    clearColors();
    Questionbook=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    document.getElementById("nextque").innerText = "Next Question";
    document.getElementById("playername").value = "";
    startTime=0;
    endTime=0;
}

function backchange(){
    if (isLight) {
        document.body.classList.remove("light");
        isLight = false;
    } else {
        document.body.classList.add("light");
        isLight = true;
    }
}

function updateLeaderboard(finalScore, timeUsed) {
    let name = document.getElementById("playername").value.trim();
    let currentPlayer = null;
    for (let i = 0; i < leaderboard.length; i++) {
        if (leaderboard[i].name === name) {
            currentPlayer = leaderboard[i];
            break;
        }
    }
    if (currentPlayer === null) {
        currentPlayer = {
                name: name,
                score: finalScore,
                correct: correctCount,
                time: timeUsed
            };
        leaderboard.push(currentPlayer);
    }
    else {
        if (finalScore > currentPlayer.score) {
            currentPlayer.score = finalScore;
            currentPlayer.correct = correctCount;
            currentPlayer.time = timeUsed;
        }
    }
    for (let i = 0; i < leaderboard.length - 1; i++) {
        for (let j = i + 1; j < leaderboard.length; j++) {
            if (leaderboard[j].score > leaderboard[i].score) {
                let t = leaderboard[i];
                leaderboard[i] = leaderboard[j];
                leaderboard[j] = t;
            }
        }
    }
    for (let i = 0; i < leaderboard.length; i++) {
        if (leaderboard[i] === currentPlayer) {
            document.getElementById("result").innerText += "\nYour best-score rank: " + (i + 1);
            break;
        }
    }
    let ot = "";
    for (let i = 0; i < leaderboard.length; i++) {
        ot += (i + 1) + ". " +
            leaderboard[i].name + ": " +
            leaderboard[i].score.toFixed(1) + " (" +
            leaderboard[i].correct + "/5, " +
            leaderboard[i].time.toFixed(1) + "s) " +
            skill_name[Math.floor(leaderboard[i].score/18)] + "\n";
    }
    document.getElementById("leaderboard").innerText = ot;
}
