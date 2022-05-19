function slice_Method() { //slice method, characters 14 to 33 will show
    var Sentence = "I don't think JavaScript is cool";
    var Section = Sentence.slice(14,33);
    document.getElementById("Slice").innerHTML = Section;
}


function toUpperCase_Function() { //This function changes the string to all uppercase
    let text = "i wish i was bigger";
    let result = text.toUpperCase();

    document.getElementById("uppercase").innerHTML = result;
}

function search_Function() { // Returns the position of the first found instance of the search word (here, it looks for the word "is")
    let text = "My pen is white.";
    let position = text.search("is");
    document.getElementById("searching").innerHTML = position;
}

function toStringFunction() { // Will change a number data type to a string
    X = 50392;
    document.getElementById("numberToString").innerHTML = X.toString();
}

function precision_Method() { // Will cut down all these digits to the number desired (7)
    var X = 3.1415920245920349840960234761;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}

function toFixed_Method() { // Will round off a number to desired amount of digits (3 in this case)
    let num = 55.94537;
    let n = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = n;
}

function valueOf_Method() { // Value of returns the primitive value of a string
    let text = "Weewooweewooweewoo";
    let result = text.valueOf();
    document.getElementById("value_of").innerHTML = result;
}
