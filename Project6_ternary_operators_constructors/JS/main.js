function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //ternary operator to assign value to a variable based on the input from the input form in HTML file
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function unnested() { //creation of function called unnested
    document.getElementById("Nested_Function").innerHTML = countFunction();
    function countFunction() { //nested function called countFunction
        var A = 1; // setting variable A to value 1
        function Plus_one() {A += 1;} //function Plus_one will add 1 to A
        Plus_one();
        return A; //returns the result of the math above, which is printed in HTML due to getElementbyID
    }
}

function Dog(Age, Breed, Color) { //constructor function with this keywords
    this.Dog_Age = Age;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
}
var Ringo = new Dog(12, "Puggle", "Fawn"); //creating new objects with new keywords
var Daly = new Dog(3, "German Shepherd", "Black");
var Doc = new Dog(1, "Black Lab", "Black");
function Dog_Function() { //this function will print info using the new objects listed above
    document.getElementById("dogInfo").innerHTML = "Ringo is a " + Ringo.Dog_Color + "-colored " + Ringo.Dog_Breed + " that is " + Ringo.Dog_Age + " years old."
}
