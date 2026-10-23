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
        target.innerHTML = "Question 1:A population of bacteria grows according to the model P(t)=300e0.04t, where t is measured in hours. What is the size of the initial population?
Answer choices:
300
500
302.4
304.8
";

    }
    else if(ql == 2){
        target.innerHTML = "Questions 2:Solve the following logarithmic equation for x:
2(x+3)+2(x-3)=4
2
1
5
2
";
    }
    else if(ql == 3){
        target.innerHTML = "An ellipse is given by the algebraic equation:
x^2/16+y^2/9=1
Which of the following correctly identifies its foci?
a)sqrt(7)
b)-sqrt(7)
c)0
d) +- sqrt(7)
";
    }
    else if(ql == 4){
        target.innerHTML = "Questions 4:Find the sum of the infinite geometric series:
8+4+2+1+......
a)5
b)24
c)8
d)16
";
    }
    else if(ql == 5){
        target.innerHTML = "Questions 5:What is the completely expanded form of the expression (2x-3)4?
a)8x4-96x3+216x2-216x+81
b)16x4-96x3+216x2-216x+81
c)4x4-96x3+216x2-216x+81
d)32x4-96x3+216x2-216x+81
";
    }
}
