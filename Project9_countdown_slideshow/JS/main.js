function countdown() {
    var seconds = document.getElementById("seconds").value; //creation of function called countdown() and local variable called seconds which will equal the value of input

    function tick() { // function called tick 
        seconds = seconds - 1;
        timer.innerHTML = seconds; // paragraph element with ID "timer" is set equal to "seconds"
        var time = setTimeout(tick, 1000); // Variable time set, with tick function occurring every 1000ms (or one second)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = ""; // Provides an end to the function once the timer is done.
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

//Next/Prev controls
function plusSlides(n) { // This function will act for next/previous buttons, adding 1 to slide index
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) { 
    showSlides(slideIndex = n);
}

function showSlides(n) { // Function showSlides initiated
    let i;
    let slides = document.getElementsByClassName("mySlides fade"); // "slides" equals the HTML element with the class name "mySlides fade" (the div with images, captions)
    let dots = document.getElementsByClassName("dot"); // Same idea but applied to the span element with class dot, the dots below the slideshow
    if (n > slides.length) {slideIndex = 1} // If n becomes greater than 3, the slideshow will go back to the first part of the index?
    if (n < 1) {slideIndex = slides.length} // Same but opposite, creates a looping effect in the slideshow
    for (i =0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { 
        dots[i].className - dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
