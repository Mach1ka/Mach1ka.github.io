var $start = document.querySelector("#start");
var $game = document.querySelector("#game");

var score = 0;
$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);
function startGame() {
    $game.style.backgroundColor = "#fff";
    $start.classList.add("hide");

    renderBox();
}

function handleBoxClick(event) {
    // console.log(event.target.dataset.box);
    if (event.target.dataset.box) {
        score++;
        console.log(score);
        renderBox();
    }
}

function renderBox() {
    $game.innerHTML = "";
    var box = document.createElement("div");
    var gameSize = $game.getBoundingClientRect();
    var maxTop = gameSize.height - 60;
    var maxLeft = gameSize.width - 60;

    box.style.height = box.style.width = "50px";
    box.style.position = "absolute";
    box.style.borderRadius = "100px";
    box.style.backgroundColor = "#000";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.left = getRandom(0, maxLeft) + "px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", "true");

    $game.insertAdjacentElement("afterbegin", box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
