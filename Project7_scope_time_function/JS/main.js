let message = "Global variables live outside of functions" //global variable
alert(message);

function showMessage() {
    let message = "Hello, World"; //local variable
    alert(message);
}

function timeFunction() { // This function uses the Date Method for time, and will print Good morning or Good evening depending on the result.
    if (new Date() .getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "Good morning!"
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good Evening!";
    }
}

function myIfFunction() {
    X = 1; //local variables
    Y = 3;
    if (X > Y) {
        Math = "1 is more than 3"; //Not true, so won't be printed
    }
    else {
        Math = "1 is less than 3";
    }
    document.getElementById("simpleMath").innerHTML = Math; // The variable Math is printed when the element is clicked, with the value "1 is less than 3"
}

function birthYear() {
    Year = document.getElementById("Year").value;
    if (Year <= 2004) {
        Message = "You are old enough to browse our bar menu."
    }
    else {
        Message = "Sorry, you are not old enough to browse our bar menu."
    }
    document.getElementById("What_Birthyear").innerHTML = Message;
}

function Time_function() { //function named Time_function
    var Time = new Date() .getHours(); //sets variable time with Date Method
    var Reply;  //variable Reply will change depending on conditions below
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"; // When the hour is less than 12 and greater than 0, variable Reply becomes "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
   document.getElementById("Time_of_day").innerHTML = Reply; //When the button is clicked, the variable Reply will be printed
}
