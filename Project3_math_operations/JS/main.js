function mathFunction() {
    var addition = 15000 + 40555;
    document.getElementById("Math").innerHTML = addition;
} //This function adds the two values provided and returns an element to the HTML file with the same ID

function subtractionFunction() {
    var subtraction = 349560 - 349559;
    document.getElementById("sub").innerHTML = subtraction;
} //This function subtracts the two values provided and returns an element to the HTML file with the same ID

function subtract() {
    var sub = 15-10;
    document.getElementById("subtractionOperation").innerHTML = "15 - 10 = " + sub;
}  //Same as last function but includes a string with the result

function multiplyFunction() {
    var multiply = 2 * 0;
    document.getElementById("times").innerHTML = "2 * 0 = " + multiply;
} //This function multiplies the two values provided and returns an element to the HTML file with the same ID

function divisionFunction() {
    var divide = 5 / 1;
    document.getElementById("dividing").innerHTML = "5 / 1 = " + divide;
}  //This function divides the two values provided and returns an element to the HTML file with the same ID

function multipleMath() {
    var lotta_Math = (3-1) * 10 / 5 + 2;
    document.getElementById("moreMath").innerHTML = "3 minus 1, times 10 then divided by 5, plus 2 = " + lotta_Math;
} //This function computes the math equation and returns an element to the HTML file with the same ID

function modulusOperator() {
    var remainder = 30 % 7;
    document.getElementById("modulus").innerHTML = "When you divide 30 by 7, there is a remainder of " + remainder; 
} //This function shows the remainder of a division problem, then displays it

function negationFunction() {
    var A = 5;
    document.getElementById("negate").innerHTML = -A;  //This negates the value given to variable A
}

function incrementFunction() {
    var X = 1;
    X++;
    document.getElementById("increment").innerHTML = "1 up from 1 is..." + X; //This increments the value given to X by 1
}

function decrementFunction() {
    var Z = 1;
    Z--;
    document.getElementById("decrement").innerHTML = "1 down from 1 is..." + Z; //This decrements the value given to Z by 1
}

window.alert(Math.random() * 1000); //This shows a window alert with a random number from 1 to 1000
