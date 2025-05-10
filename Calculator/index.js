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