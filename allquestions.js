function choosequestion(difficulty, ql) {
    const easy_questions=[
        "Question 1 What is the value of the expression: -7 + 12 - (-4)?",
        "Question 2 Evaluate the expression: (-24) ÷ (-6) × (-2)",
        "Question 3 Solve this equation: x - 7 = -15",
        "Question 4 Solve this linear equation: 3y + 5 = -13",
        "Questions 5:solve this equation:5x-3=2x+9"
    ];
    const medium_questions=[
        "Question 1 (Pythagorean Theorem): A right triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?",
        "Question 2 (Basic Geometry): A rectangle has a length of 12 meters and a width of 5 meters. What is the perimeter of the rectangle?",
        "Question 3 (Quadratic Equations): Solve the quadratic equation for x: x² - 5x + 6 = 0.",
        "Question 4 (Systems of Linear Equations): Solve the following system of linear equations for x and y: 2x + y = 11 \n x - y = 1",
        "Solve the following system of linear equations for x and y: 3x + 2y = 16 \n x + 2y = 8"
    ];
    const hard_questions=[
        "A population of bacteria grows according to P(t) = 300e^(0.04t). What is the initial population?",
        "Solve for x: log2(x+3) + log2(x-3) = 4",
        "An ellipse is given by x²/16 + y²/9 = 1. Find c, the distance from the center to each focus.( use sqrt() )",
        "Find the sum of the infinite geometric series: 8 + 4 + 2 + 1 + ...",
        "Expand completely (use ^ for exponents): (2x-3)^4"
    ];
    if(difficulty == 1)return easy_questions[ql-1];
    if(difficulty == 2)return medium_questions[ql-1];
    if(difficulty == 3)return hard_questions[ql-1];
}
function answercheck(difficulty, ql){
    const easy_answer=[
        "9",
        "-8",
        "-8",
        "-6",
        "4"
    ];
    const medium_answer=[
        "10 cms",
        "34 meters",
        "2 or 3",
        "x=4 y=3",
        "x=4 y=2"
    ];
    const hard_answer=[
        "300",
        "5",
        "sqrt(7)",
        "16",
        "16x^4-96x^3+216x^2-216x+81"
    ];
    if(difficulty == 1)return easy_answer[ql-1];
    if(difficulty == 2)return medium_answer[ql-1];
    if(difficulty == 3)return hard_answer[ql-1];
}
