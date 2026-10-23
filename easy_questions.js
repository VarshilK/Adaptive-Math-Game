 function questionChooser(ql){
    const target = document.getElementById("questionField");
    const ans1 = document.getElementById("answerbutton1");
    const ans2 = document.getElementById("answerbutton2");
    const ans3 = document.getElementById("answerbutton3");
    const ans4 = document.getElementById("answerbutton4");
    const ans5 = document.getElementById("answerbutton5");
    //alert(hl);
    // alert("Is your number "+ target.innerHTML);
    //guess is now a number
    if (ql == 1){//take higher half
        target.innerHTML = "Question 1 What is the value of the expression: -7 + 12 - (-4)?";
        ans1.innerHTML = "9.";

    }
    else if(ql == 2){
        target.innerHTML = "Question 2 Evaluate the expression: (-24) ÷ (-6) × (-2)";
        ans2.innerHTML = "-8.";
    }
    else if(ql == 3){
        target.innerHTML = "Question 3 Solve this equation: x - 7 = -15";
        ans3.innerHTML = "x = -8.";
    }
    else if(ql == 4){
        target.innerHTML = "Question 4 Solve this linear equation: 3y + 5 = -13";
        ans4.innerHTML = "y = -6";
    }
    else if(ql == 5){
        target.innerHTML = "Questions 5:solve this equation:5x-3=2x+9";
        ans5.innerHTML = "x = 4";
    }
}
