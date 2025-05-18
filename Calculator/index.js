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
    // the background color
    const calculator = document.getElementById('calculator');
    // the style selection form the css file

    // the display
    const display = document.getElementById('screen');
    // top letters
    const logo = document.getElementById('logo');
    //dark mode toggle
   const modeIcon = document.getElementById('modeIcon');

    const isLightMode =  calculator.style.background === 'white';

    if (isLightMode) {
        // Switch to Dark Mode
        calculator.style.background = 'black';
        display.style.background = 'white';
        display.style.color = 'black';
        logo.style.color = 'white';
        modeIcon.textContent = 'light_mode';
        modeIcon.classList.remove('light_mode');
        modeIcon.classList.add('dark_mode');
         

    } else {
        // Switch to Light Mode
        calculator.style.background = 'white';
        display.style.background = 'black';
        display.style.color = 'white';
        logo.style.color = 'black';
        modeIcon.textContent = 'dark_mode';
        modeIcon.classList.remove('dark_mode');
        modeIcon.classList.add('light_mode');
    }
}