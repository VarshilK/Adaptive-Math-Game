Team Self-Evaluation — Adaptive Math Game

## 1. Project Purpose and Plan

Our goal was to build a short adaptive math diagnostic. The player answers five questions, and the difficulty increases after a correct answer and decreases after an incorrect answer. We kept each round short to make the test fast-paced and encourage players to finish.

The final game includes a start screen, multiple-choice questions, answer feedback, a timer, a results screen, a leaderboard and a light/dark theme.

Evidence:
- [Project plan linked in README](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/README.md)
- [Live game](https://varshilk.github.io/Adaptive-Math-Game/)

## 2. Mathematical and Logical Concepts

The question bank contains five easy, five medium and five hard questions. Topics include arithmetic, equations, geometry, logarithms and series.

The program uses conditionals to check answers and adjust difficulty. It uses random selection and an array to track previously selected questions. Loops find existing players and sort the leaderboard.

The final score combines accuracy and time:

- Accuracy score = (correct answers / 5) × 100
- Time score = 100 / (1 + time in seconds / 60)
- Final score = 0.7 × accuracy score + 0.3 × time score

This gives accuracy more weight while also rewarding faster completion.

Evidence:
- [Question bank and answer keys](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/allquestions.js)
- [Game logic and scoring](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/game.js)

## 3. Documentation

We documented the file structure, game flow, functions, team contributions and testing.

The architecture explains how index.html, style.css, allquestions.js and game.js connect. The code tour explains the main functions and links to the source. The test plan records checks of the main game features.

Evidence:
- [Architecture](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/docs/architecture.md)
- [Code tour](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/docs/code-tour.md)
- [Test plan](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/docs/test-plan.md)
- [Personal reflections](https://github.com/VarshilK/Adaptive-Math-Game/tree/main/docs/reflections)
- [Sprint records](https://github.com/VarshilK/Adaptive-Math-Game/tree/main/sprints)

## 4. Team Contributions

- Varshil led task coordination, proposed most of the game features and contributed to the initial game logic, layout and README.
- Liming developed the main game logic, leaderboard and theme features.
- Jack wrote the 15 questions, coded the hard questions and developed the timer-related code.
- Bella coded the medium questions and contributed to checking the questions and answers.
- Rohin developed the initial answer checker, contributed to the HTML, integrated the game versions and prepared documentation.

The original author of a feature and the person who integrated it were sometimes different. Our code tour distinguishes these contributions.

Evidence:
- [Commit history](https://github.com/VarshilK/Adaptive-Math-Game/commits/main/)
- [Contribution descriptions](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/docs/code-tour.md)

## 5. Working Program and Testing

The game is published on GitHub Pages. The documented tests cover starting with a name, answer feedback, difficulty changes, repeated questions, the results screen, the leaderboard, restarting and theme switching.

The implementation supports the complete five-question game flow.

Evidence:
- [Play the game](https://varshilk.github.io/Adaptive-Math-Game/)
- [Test results](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/docs/test-plan.md)
- [Gameplay demonstration linked in README](https://github.com/VarshilK/Adaptive-Math-Game/blob/main/README.md#gameplay)

## 6. Limitations and Incomplete Requirements

We did not follow the required GitHub issue, daily standup comment and pull request review workflow. We coordinated through other communication and committed changes directly. These activities do not replace the GitHub evidence required by the assignment.

The leaderboard stores scores only during the current page session. Refreshing the page clears it. The timer stops when the player clicks Finish, so the final waiting time is included in the score.

Some question wording and answer choices could be improved. The five-question result is a brief game result rather than a comprehensive assessment of mathematical ability.

## 7. Overall Evaluation and Next Steps

Our strongest areas are the working adaptive game, the scoring and leaderboard features, and the explanation of the code structure. Our main weakness is the incomplete GitHub collaboration workflow.

For a future project, we would create the backlog and issues first, record standups as they happen, develop features through pull requests and keep clearer testing records. We would also improve the question wording and clarify the timing and score-storage behavior.
