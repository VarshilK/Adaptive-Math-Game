# Game Architecture

## Overview
Our game is an Adaptive Math Diagnostic. You get 5 math questions. If you get one right the next one is harder, and if you get it wrong the next one is easier.

## Team
Varshil was team leader and came up with most of the game's features. Liming, Jack, Bella and Rohin were developers. Bella was responsible for testing.

## Files

| File | Owner | Functions | Used by |
| --- | --- | --- | --- |
| index.html | Rohin (built with Varshil and Liming) | Start page, game page, summary page, leaderboard, theme button. Loads allquestions.js and game.js | The player |
| style.css | Varshil, Liming, Rohin | Design, colors, layout, light/dark theme | index.html |
| allquestions.js | Jack (questions), Bella (medium questions and testing), Liming and Varshil (code) | choosequestion(difficulty, ql), answerback(difficulty, ql) | game.js |
| game.js | Liming (main code), Jack (timer), Rohin (combined both versions) | pickQuestion(), startGame(), updateTimer(), myFunction(choice), answercheck(answer_player), showQuestion(), showSummary(), clearColors(), nextQuestion(), restart(), backchange(), updateLeaderboard(finalScore, timeUsed) | index.html buttons |

## Other Files
- answerchecker.md: This was my first answer checker. I made it in Python when the player had to type the answer. After we switched to A, B, C, D buttons we checked answers in answercheck() in game.js instead, so the game doesn't use this file anymore.
- easy_questions.js, medium_questions.js, hard-questions.js: Our first question files. Later we put them all into allquestions.js.
- game version2.js: Jack's game.js that had the timer. We put it together with Liming's game.js.

## How the Files Connect
1. index.html loads allquestions.js and then game.js.
2. When you click a button in index.html it runs a function in game.js like startGame() or nextQuestion().
3. game.js uses choosequestion() and answerback() from allquestions.js to get the question and the answer.

## How the Game Works
1. You type your name and press Start. The timer starts.
2. The game picks a question.
3. You pick A, B, C or D.
4. The level goes up or down depending on if you got it right.
5. After 5 questions the timer stops and you see your score.
6. The leaderboard saves your best score.
7. You can press Play again to restart.
