function myDictionary() {
    var Lebron = {
        Height:"6-9",
        Weight:"260 pounds",
        Team:"Lakers",
        Number:6,
        Hometown:"Akron"
    };
    delete Lebron.Hometown;
    document.getElementById("Dictionary").innerHTML = Lebron.Hometown;
}
