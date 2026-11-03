# Code Tour

After starting the game the user is asked to enter their name and then answer some maths questions. These are randomly chosen from a bank of questions. The game checks if the answers are right. The difficulty can change depending on how the user is answering. The game will give a summary of how the user did after 5 questions. There is a leaderboard that tracks the scores. The user can also reset the game.

## 1. Start Game

game.js

startGame()

If the user has entered a name this function will hide the start screen and show them the game. It will then pick a question.

Requirements: The user must enter their name.

## 2. Pick Question

game.js

pickQuestion()

Picks a random question from the current difficulty. The question book ensures that the questions aren’t repeated.

Requirements: Questions are random and no repeats.

## 3. Answer Check and Difficulty

game.js

answercheck()

This function will check if the users answer was correct. It will highlight the correct answer in green and incorrect in red. This function increases or decreases the difficulty.

Requirements: Answers are checked and difficulty changes.

## 4. Show Summary

game.js

showSummary()

After 5 questions the game will hide and show the user how many they got right. It will also show what level they reached.

Requirements: Summary of how the user did.

## 5. Leaderboard

game.js

updateLeaderboard()

This will save the users name and score. It will update their highest score. It will sort the leaderboard from highest to lowest. It will show the player their rank.

Requirements: Score tracking and leaderboard.

## 6. Reset

game.js

restart()

This resets the question count, difficulty, correct answers and questions used. It takes the user back to the start screen.

Requirements: Users can reset and play again.
