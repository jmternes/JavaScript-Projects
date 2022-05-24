function Call_Loop() {
    var Digit = "";
    var A = 1;
    while (A < 21) { //As long as A is less than 21, it will do the function below
        Digit += "<br>" + A;
        A++; // The function adds 1, and displays the value, before checking the while condition, and then continuing, if necessary.
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var X = "hello, there."
document.write(X.length); //String length

function for_Loop() {
    var List = "";
    var X;
    var Sports = ["Basketball", "Baseball", "Golf", "Football", "Soccer"];
    for (X = 0; X < Sports.length; X++) { //For loop starting at index position 0, and will loop as long as position is less than index length, and will add 1 to the position of the index, thus, working through it.
        List += Sports[X] + "<br>";
    }
    document.getElementById("List_of_Sports").innerHTML = List; //returns list of sports in paragraph element
}

function array_Function() {
    var tree_Type = []; // Initiating an empty array called tree_Type
    tree_Type[0] = "Oak"
    tree_Type[1] = "Elm"
    tree_Type[2] = "Spruce"
    tree_Type[3] = "Maple" //Adding values to the array, in these positions
    document.getElementById("Array").innerHTML = "Oh, look! It's a " + tree_Type[3] + " tree! Wow."; //Concatenating a sentence, using our tree_Type array with position 3 (Maple)
}

function constant_function() {
    const Motorcycle = {make:"Honda", model:"Rebel", color:"Black"}; // Constant initiated
    Motorcycle.color = "White"; // Changing color property with value white
    Motorcycle.enginesize = "500cc"; // Adding property with value
    document.getElementById("Constant").innerHTML = "You've just won a " + Motorcycle.color + " " + Motorcycle.make + " " + Motorcycle.model + " with a " + Motorcycle.enginesize + " engine!" // Concatenating string with these properties to make a sentence appear.
}

var B = 10;
{
    let B = "...I changed to a string...";
    document.write(B); //within the curly brackets, let B changes B to a string
}
document.write(B); //Outside curly brackets, B is back to 10

let i = 0

while (i < 5) {
    if (i === 4) {
        break;  //break statement, meaning when the loop reaches this point, it will stop at this point, which is why console log gives us 4
    }
    i = i + 1;
}

console.log(i);


let continuetext = "";

for (let i = 0; i < 20; i++) {
    if (i === 3) {
        continue; //continue statement, where when the loop reaches this iteration of the loop, it will end but then continue, which leaves us with a counter to 20, but not including 3.
    }
    continuetext = continuetext + i;
}

console.log(continuetext);
