# Code Tour

Users will be prompted to enter their name and answer some math questions. Questions will be randomly selected from a pool. The game will check if the answers are correct. The difficulty can change based on how the user is doing. A timer will be used to track how long the user takes. After 5 questions the game will show a summary of how the user has done. The leaderboard will track the scores. The theme can be changed and the game reset.

## Features

| # | Feature | Functions | Responsible | Developed by |
|---|---|---|---|---|
| 1 | Start Game | startGame() index.html start page | Rohin, Liming | Varshil developed the initial startGame() and the layout of the page. Liming developed the final startGame(). Rohin was responsible for the index.html and making sure both versions of the game.js worked with it. |
| 2 | Select Question | pickQuestion(), choosequestion(), showQuestion() | Jack, Bella | Jack developed all 15 questions and the hard question code. Bella developed the medium question code. Liming and Varshil merged all the questions into allquestions.js. Liming developed the pickQuestion() function. |
| 3 | Check Answer | myFunction(), answercheck(), answerback() | Rohin, Jack | Rohin developed the initial answer check. Jack developed the answer key. Liming developed the final answercheck() function after we moved to using A,B,C,D buttons. |
| 4 | Adjust Difficulty | answercheck() | Liming, Varshil | Varshil created the initial game logic with the 3 difficulty levels. Liming developed the final increase and decrease difficulty function. |
| 5 | Next Question & Timer | nextQuestion(), clearColors(), updateTimer() | Jack, Liming | Jack developed the timer. Liming developed the nextQuestion() function. Rohin added Jack's timer onto Liming's game.js. |
| 6 | Summary & Leaderboard | showSummary(), updateLeaderboard(), backchange() | Liming, Jack | Liming developed the leaderboard and theme button. Jack developed the time score. Rohin merged both versions to make them work. |
| 7 | Restart | restart() | Liming, Jack | Liming developed the restart() function. Jack added the timer reset. |

1. Start: User enters their name and presses start. The game will check the name and show the questions screen. The timer will begin.

2. Select Question: A question will be randomly selected from the difficulty the user is on. The question will be recorded to ensure no duplicates.

3. Check Answer: Users select either A,B,C or D. The game will check the answer and increase the correct answer counter.

4. Adjust Difficulty: If the user gets the answer correct the difficulty will be increased. If they get it wrong the difficulty will be decreased. The difficulty will stay between Easy and Hard.

5. Next Question: The game will repeat selecting a question, getting an answer and adjusting the difficulty. Once 5 questions have been answered the timer will stop.

6. Summary: showSummary() will display the final score and level. updateLeaderboard() will update the leaderboard.

7. Restart: User can start a new test. The previous test should be cleared so new questions can be displayed.

Varshil was team leader. He organised standups, assigned tasks and reviewed the designs. Bella was responsible for testing.

## Function Details

## 1. Start Game

game.js startGame() [line 22-35](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L22-L35)

Developed by: Liming (timer developed by Jack)

If the user has entered their name it will hide the start screen and show the game. It will start the timer and select a question.

Must: User must enter their name.

## 2. Timer

game.js updateTimer() [line 24-28](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L24-L28)

Developed by: Jack

The updateTimer() function is contained within the startGame() function. It will run every second and show how many seconds the user has been playing. The timer has been broken down into a few functions. It will start during the startGame() function, stop during nextQuestion() after the last question and reset during restart().

Must: Track how long the user spends playing.

## 3. Pick Question

game.js pickQuestion() [line 15-20](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L15-L20)

Developed by: Liming

A question will be randomly selected from the current difficulty. The question book will ensure there are no duplicate questions.

Must: Questions are random and no duplicates.

## 4. Show Question

game.js showQuestion() [line 60-63](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L60-L63)

Developed by: Liming

This will display the question number and question. It will pull the question from the choosequestion() function in the allquestions.js.

Must: Question and 4 options displayed.

## 5. Questions & Answers

allquestions.js choosequestion() [line 1-29](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/allquestions.js#L1-L29), answerback() [line 31-39](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/allquestions.js#L31-L39)

Developed by: Questions were developed by Jack. Questions were coded by Liming and Varshil.

The choosequestion() function has 5 easy, 5 medium and 5 hard questions. It will return the question based on the current difficulty. The answerback() function will return the correct letter.

Must: Questions bank with 3 different difficulties.

## 6. Select Answer

game.js myFunction() [line 37-42](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L37-L42)

Developed by: Liming

This function will run when the user selects A,B,C or D. It will ensure the user can only answer once and check the answer. It will show the next question button.

Must: User can only select one answer.

## 7. Check Answer & Difficulty

game.js answercheck() [line 44-58](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L44-L58)

Developed by: Liming

This function will check if the users answer was correct. It will highlight the correct answer in green and incorrect in red. It will increase/decrease the difficulty.

Must: Answers checked. Difficulty changed.

## 8. Next Question

game.js nextQuestion() [line 91-107](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L91-L107), clearColors() [line 84-89](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L84-L89)

Developed by: Liming (stopping timer developed by Jack)

The clearColors() function will remove the green and red. The nextQuestion() function will move to the next question. When the user gets to question 5 the button will say finish. Once they have answered question 5 it will stop the timer and show the summary.

Must: 5 questions in game.

## 9. Show Summary

game.js showSummary() [line 65-82](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L65-L82)

Developed by: Liming (time score developed by Jack)

Once the user has completed 5 questions the game will hide and show how many they got correct. It will calculate a total score. 70% of this will be based on how many they got correct and 30% on how quickly they answered. It will show what level they got to (noob, pro or god).

Must: Show summary of how user did.

## 10. Leaderboard

game.js updateLeaderboard() [line 138-188](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L138-L188)

Developed by: Liming

This will save the users name and score. It will update the users highest score. It will sort the leaderboard from highest to lowest. It will show the players rank.

Must: Track score. Leaderboard.

## 11. Reset

game.js restart() [line 109-126](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L109-L126)

Developed by: Liming (timer reset developed by Jack)

This will reset the question count, difficulty, correct answer count, questions used and timer. It will return the user to the start screen.

Must: Users can reset and play again.

## 12. Change Theme

game.js backchange() [line 128-136](https://github.com/VarshilK/Adaptive-Math-Game/blob/84e896716ae95e5fc298df46bb6264296fb19167/game.js#L128-L136)

Developed by: Liming

When the user presses change theme it will switch to dark/light mode.

Must: Users can change theme.
