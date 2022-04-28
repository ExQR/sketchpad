const rangeControl = document.getElementById('checks');
rangeControl.oninput = function() {
    checkValue();
}
function checkValue() {
    let val = document.getElementById('checks').value;
    document.getElementById('rangeOutput').innerHTML = val;
}
