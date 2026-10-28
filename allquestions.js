function choosequestion(difficulty, ql) {
    const easy_questions = [
        "What is the value of the expression: -7+12-(-4)?\nA) 1\nB) 9\nC) 15\nD) -19",
        "Evaluate the expression: (-24) ÷ (-6) × (-2)\nA) -8\nB) -2\nC) 2\nD) 8",
        "Solve this equation: x-7=-15\nA) x=-22\nB) x=-8\nC) x=8\nD) x=22",
        "Solve this linear equation: 3y+5=-13\nA) y=-6\nB) y=-8/3\nC) y=6\nD) y=18",
        "Solve this equation: 5x-3=2x+9\nA) x=2\nB) x=67676767\nC) x=4\nD) x=12"
    ];

    const medium_questions = [
        "(Pythagorean Theorem) A right triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?\nA) 9 cm\nB) 11 cm\nC) 6 cm\nD) 10 cm",
        "(Basic Geometry) A rectangle has a length of 12 meters and a width of 5 meters. What is the perimeter of the rectangle?\nA) 17 meters\nB) 34 meters\nC) 60 meters\nD) 24 meters",
        "(Quadratic Equations) Solve the quadratic equation for x: x² - 5x + 6 = 0.\nA) x = 2 and x = 3\nB) x = -2 and x = -3\nC) x = 1 and x = 6\nD) x = -1 and x = -6",
        "(Systems of Linear Equations) Solve the following system of linear equations for x and y:\n2x + y = 11\nx - y = 1\nA) x = 3, y = 5\nB) x = 4, y = 3\nC) x = 5, y = 1\nD) x = 2, y = 7",
        "(Systems of Linear Equations) Solve the following system of linear equations for x and y:\n3x + 2y = 16\nx + 2y = 8\nA) x = 2, y = 5\nB) x = 4, y = 2\nC) x = 4, y = 4\nD) x = 0, y = 4"
    ];

    const hard_questions = [
        "A population of bacteria grows according to the model P(t)=300e^(0.04t), where t is measured in hours. What is the size of the initial population?\nA) 300\nB) 500\nC) 302.4\nD) 304.8",
        "Solve the following logarithmic equation for x: log2(x+3) + log2(x-3) = 4\nA) 2\nB) 1\nC) 5\nD) 2",
        "An ellipse is given by the algebraic equation: x²/16 + y²/9 = 1. Which of the following correctly identifies its foci?\nA) sqrt(7)\nB) -sqrt(7)\nC) 0\nD) ±sqrt(7)",
        "Find the sum of the infinite geometric series: 8+4+2+1+......\nA) 5\nB) 24\nC) 8\nD) 16",
        "What is the completely expanded form of the expression (2x-3)^4?\nA) 8x^4-96x^3+216x^2-216x+81\nB) 16x^4-96x^3+216x^2-216x+81\nC) 4x^4-96x^3+216x^2-216x+81\nD) 32x^4-96x^3+216x^2-216x+81"
    ];

    if (difficulty === 1) return easy_questions[ql - 1];
    if (difficulty === 2) return medium_questions[ql - 1];
    if (difficulty === 3) return hard_questions[ql - 1];
}

function answerback(difficulty, ql) {
    const easy_answer = ["B", "A", "B", "A", "C"];
    const medium_answer = ["D", "B", "A", "B", "B"];
    const hard_answer = ["A", "C", "D", "D", "B"];

    if (difficulty === 1) return easy_answer[ql - 1];
    if (difficulty === 2) return medium_answer[ql - 1];
    if (difficulty === 3) return hard_answer[ql - 1];
}
