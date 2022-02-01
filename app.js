
// HTML classes
const loadText = document.querySelector('.loading');
const background = document.querySelector('.background');

// Load status value
let load = 0;

// Interval the function will run
let int = setInterval(blurring, 30);

function blurring() {
    load++;

        // reset load value if over 99
        if(load > 99) {
            clearInterval(int);
        }

    
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

