# Game Architecture

## Overview
Our project is an Adaptive Math Diagnostic game. It gives players five math questions and adjusts the difficulty based on their previous answers.

## Files

| File | Owner | Functions | Used by |
| --- | --- | --- | --- |
| index.html | Rohin (built with Varshil and Liming) | Start page, game page, summary page, leaderboard, theme button. Loads allquestions.js and game.js | The player |
| style.css | Varshil, Liming, Rohin | Design, colors, layout, light/dark theme | index.html |
| allquestions.js | Jack (questions), Bella (medium questions), Liming and Varshil (code) | choosequestion(difficulty, ql), answerback(difficulty, ql) | game.js |
| game.js | Liming (main code), Jack (timer), Rohin (combined both versions) | pickQuestion(), startGame(), updateTimer(), myFunction(choice), answercheck(answer_player), showQuestion(), showSummary(), clearColors(), nextQuestion(), restart(), backchange(), updateLeaderboard(finalScore, timeUsed) | index.html buttons |

## Other Files
- answerchecker.md: My first answer checker. It was written in Python for typed answers. When we changed to A, B, C, D buttons, the answer checking moved into answercheck() in game.js, so this file is not used by the game.
- easy_questions.js, medium_questions.js, hard-questions.js: The first versions of the questions. They were combined into allquestions.js.
- game version2.js: Jack's version of game.js with the timer. It was combined with Liming's version into game.js.

## How the Files Connect
1. index.html loads allquestions.js first and then game.js.
2. The buttons in index.html call functions in game.js (startGame(), myFunction(), nextQuestion(), restart(), backchange()).
3. game.js calls choosequestion() and answerback() from allquestions.js to get the question and the right answer.

## How the Game Works
1. The player enters their name and starts the game. The timer starts.
2. The game selects questions from the question bank.
3. The player answers each question using one of four choices.
4. The difficulty adjusts based on the player's answers.
5. After five questions, the timer stops and the game shows the player's results and final score.
6. The leaderboard updates with the player's best score.
7. The player can restart and play again.
