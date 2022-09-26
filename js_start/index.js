var $start = document.querySelector("#start");
var $game = document.querySelector("#game");
var $time = document.querySelector("#time");
var $result = document.querySelector("#result");
var $gameTime = document.querySelector("#game-time");
// var $app = document.querySelector("#app");
var $timeHeader = document.querySelector("#time-header");
var $resultHeader = document.querySelector("#result-header");

var score = 0;
var isGameStarted = false;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);
$gameTime.addEventListener("input", setGameTime);

function show($el) {
    $el.classList.remove("hide");
}

function hide($el) {
    $el.classList.add("hide");
}
function startGame() {
    score = 0;
    setGameTime();
    $gameTime.setAttribute("disabled", "true");

    isGameStarted = true;
    $game.style.backgroundColor = "#fff";
    $start.classList.add("hide");

    var interval = setInterval(function () {
        console.log("4444444");
        var time = parseFloat($time.textContent);

        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();
}

function setGameScore() {
    $result.textContent = score.toString() + " лох :)";
}

function setGameTime() {
    var time = +$gameTime.value;
    $time.textContent = time.toFixed(1);
    show($timeHeader);
    hide($resultHeader);
}

function endGame() {
    isGameStarted = false;
    setGameScore();
    $gameTime.removeAttribute("disabled");
    show($start);
    $game.innerHTML = "";
    $game.style.backgroundColor = "#ccc";
    hide($timeHeader);
    show($resultHeader);
}
function handleBoxClick(event) {
    if (!isGameStarted) {
        return;
    }
    if (event.target.dataset.box) {
        score++;
        console.log("++++++++ = " + score);
        renderBox();
    } else {
        // var mouseX = event.offsetX;
        // var mouseY = event.offsetY;

        score--;
        console.log("------- = " + score);
        // miss(mouseX, mouseY);
        // setTimeout(function () {
        //     $(".hiden").fadeOut("fast");
        // }, 1000);
    }
}

function miss(mouseX, mouseY) {
    // $game.innerHTML = "";
    // renderBox();
    var miss = document.createElement("div");
    console.log(miss.style.animationDuration);
    miss.textContent = "- 1";
    miss.style.height = miss.style.width = "40px";
    miss.style.position = "absolute";
    miss.style.top = mouseY - 10 + "px";
    miss.style.left = mouseX + 20 + "px";
    miss.style.animationName = "example";
    miss.style.animationDuration = "0.8s";

    $game.insertAdjacentElement("afterbegin", miss);
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
    box.style.animationName = "example";
    box.style.animationDuration = "0.2s";
    box.setAttribute("data-box", "true");

    $game.insertAdjacentElement("afterbegin", box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
