var $start = document.querySelector("#start");
var $game = document.querySelector("#game");
var $time = document.querySelector("#time");
var $game_time = document.querySelector("#game-time");

var score = 0;
$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);
function startGame() {
    $game.style.backgroundColor = "#fff";
    $start.classList.add("hide");
    $time.textContent = $game_time.value;
    var interval = setInterval(function () {
        var time = parseFloat($time.textContent);

        if (time <= 0) {
            //end game
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

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
    box.style.background = "linear-gradient(#bbb, #cdd)";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.left = getRandom(0, maxLeft) + "px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", "true");

    $game.insertAdjacentElement("afterbegin", box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
