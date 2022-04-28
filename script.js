const rangeControl = document.getElementById('checks');
rangeControl.oninput = function() {
    checkValue();
}
function checkValue() {
    let val = document.getElementById('checks').value;
    document.getElementById('rangeOutput').innerHTML = val;
    return val;
}

function gridGen(val) {
    const gridContainer = document.querySelector('.container');
    clearGrid();
    for (let i=0; i<val; i++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        gridContainer.appendChild(square);
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(n => n.remove());
}

const applyButton = document.querySelector('#apply');
applyButton.addEventListener('click', () => {
    let val = checkValue();
    gridGen(val);
})