// to screen
function ToScreen(value) {
    document.getElementById('screen').value += value;
}

// clear screen

function clearScreen() {
    document.getElementById('screen').value = '';
}

// equal/ evaluate values

function equal() {
    try {
        document.getElementById('screen').value = 
        eval(document.getElementById('screen').value);
    } catch {
        document.getElementById('screen').value = 'Error';
    }
}

//the dark light mode



function darkMd() {
    const calculator = document.getElementById('calculator');
    const bgClr = window.getComputedStyle(calculator).backgroundColor;
    

    if (bgClr === 'rgb(255, 255, 255)') { // white in RGB
        calculator.style.background = 'black';
    } else {
        calculator.style.background = 'white';
    }
}
