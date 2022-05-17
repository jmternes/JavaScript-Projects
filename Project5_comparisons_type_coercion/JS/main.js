document.write(typeof 500);

document.write("1000" + 6);

function infinity() {
document.getElementById("large").innerHTML = 5E399;
}

function negInfinity() {
    document.getElementById("small").innerHTML = -5E400
}

document.write(10 > 100);

console.log(5/1);

console.log(2 > 4);

document.write(10 == 10);

document.write((10-5) == 4);

W = "10"
X = 10
Y = 10
Z = "dog"

document.write(X === Y);

document.write(X === Z);

document.write(W === X);

document.write(W === Z);

document.write(1 > 0 && 2 > 1);

document.write(1 > 0 && 1 > 2);

document.write(2 > 1 || 1 > 2);

document.write(1 > 2 || 10 > 100);

function trueFunction() {
    document.getElementById("notOp").innerHTML = !(4 > 5);
}

function falseFunction() {
    document.getElementById("notOpFalse").innerHTML = !(5 > 4);
}
