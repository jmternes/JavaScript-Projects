document.write(typeof 500); //displays data type

document.write("1000" + 6); //type coercion string and number

function infinity() {
document.getElementById("large").innerHTML = 5E399; //function to display infinity
}

function negInfinity() {
    document.getElementById("small").innerHTML = -5E400 //function to display -infinity
}

document.write(10 > 100); //displays false

console.log(5/1); //number 5 in console

console.log(2 > 4); //false in console

document.write(10 == 10); // == checks if true (it is)

document.write((10-5) == 4); // checks if true (it's not)

W = "10"
X = 10
Y = 10
Z = "dog"

document.write(X === Y); //data type and value are equal

document.write(X === Z); // neither data type nor value are equal

document.write(W === X); // value is equal but not data type

document.write(W === Z); // value is not equal but data type is

document.write(1 > 0 && 2 > 1); //boolean AND, true

document.write(1 > 0 && 1 > 2); //boolean AND, false

document.write(2 > 1 || 1 > 2); //boolean OR, true

document.write(1 > 2 || 10 > 100); //boolean OR, false

function trueFunction() {
    document.getElementById("notOp").innerHTML = !(4 > 5); //! is used as not operator, will display opposite of result of math function
}

function falseFunction() {
    document.getElementById("notOpFalse").innerHTML = !(5 > 4);
}
