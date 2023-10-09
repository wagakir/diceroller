function dice_roll(min, max) { return  (Math.floor(Math.random() * (max - min + 1) ) + min)}
function change() {
    document.getElementById('dicetext').innerText = dice_roll(1, document.querySelector('input[name="drone"]:checked').value)}
var form = document.querySelector("form");
