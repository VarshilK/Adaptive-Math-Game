 function questionChooser(ql){
    const target = document.getElementById("questionField");
    const ans1 = document.getElementById("answerbutton1");
    const ans2 = document.getElementById("answerbutton2");
    const ans3 = document.getElementById("answerbutton3");
    const ans4 = document.getElementById("answerbutton4");
    //alert(hl);
    // alert("Is your number "+ target.innerHTML);
    //guess is now a number
    if (ql == 1){//take higher half
        target.innerHTML = "Question 1 (Pythagorean Theorem): A right triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?";
        ans1.innerHTML = "10 cm.";

    }
    else if(ql == 2){
        target.innerHTML = "Question 2 (Basic Geometry): A rectangle has a length of 12 meters and a width of 5 meters. What is the perimeter of the rectangle?";
        ans2.innerHTML = "34 meters.";
    }
    else if(ql == 3){
        target.innerHTML = "Question 3 (Quadratic Equations): Solve the quadratic equation for x: x² - 5x + 6 = 0.";
        ans3.innerHTML = "x = 2 and x = 3.";
    }
    else if(ql == 4){
        target.innerHTML = "Question 4 (Systems of Linear Equations): Solve the following system of linear equations for x and y: 2x + y = 11 x - y = 1";
        ans4.innerHTML = "x = 4, y = 3";
    }
}
