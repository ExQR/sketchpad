const rangeControl = document.getElementById('checks');
rangeControl.oninput = function() {
    checkValue();
}
function checkValue() {
    let val = document.getElementById('checks').value;
    document.getElementById('rangeOutput').innerHTML = `${val}x${val}`;
    return val;
}

function gridGen(val) {
    const gridContainer = document.querySelector('.container'); 
    deleteGrid();
    for (let i=0; i<val*val; i++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        gridContainer.appendChild(square);
    }
    let pixelSize = 512/ val;
    gridContainer.style.gridTemplateColumns = `repeat(${val}, ${pixelSize}px)`;
    const gridPixel = document.querySelectorAll('.pixel');
    gridPixel.forEach((gridPixel) => {
        gridPixel.style.width = `${pixelSize}px`;
        gridPixel.style.height = `${pixelSize}px`;
        gridPixel.setAttribute("hoversCount", "1");
        });
}

function deleteGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(n => n.remove());
}

const applyButton = document.querySelector('#apply');
applyButton.addEventListener('click', () => {
    let val = checkValue();
    gridGen(val);
    drawOnGrid();
})
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearGrid();
});

const selectColor = document.querySelector('#colors');
let selectedColor = "black";
selectColor.addEventListener('change', (e) => {
    selectedColor = e.target.value;
})


function drawOnGrid(selectColor) {
    
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixels) => {pixels.addEventListener('mouseover', (e) => {
        if (selectedColor === "random-rgb") {
            let color = [Math.random()*244+1, Math.random()*244+1, Math.random()*244+1];
            e.target.style.backgroundColor = `rgb(${color[0]} ${color[1]} ${color[2]})`;
        } else if (selectedColor === "shades") {
            let hoversCount = e.target.getAttribute("hoversCount");
            if (hoversCount <= 10) {
                let shadeOfGray = 225-(hoversCount-1)*25;
                let color = [shadeOfGray, shadeOfGray, shadeOfGray];
                e.target.style.backgroundColor = `rgb(${color[0]} ${color[1]} ${color[2]})`;
            } else {
                e.target.style.backgroundColor = `black`;
            }
            hoversCount++;
            e.target.setAttribute("hoversCount", `${hoversCount}`);
        } else {
            e.target.style.backgroundColor = `black`;
        }
        });
    });
}
function clearGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(n => {
        n.style.backgroundColor = 'white';
        n.setAttribute("hoversCount", "1")
    });
}
