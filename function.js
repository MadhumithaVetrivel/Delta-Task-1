var count = 0;
var displayCount = document.getElementById("displayCount");

function countdef() {
    count = 0
    displayCount.innerHTML = ' Moves :' + '    ' + count;
}

function countadd() {
    count++;
    displayCount.innerHTML = ' Moves :' + '    ' + count;
}

var timeElapsed = 00;
var min = 00;
var hr = 00;
var timerID = -1;

function tick() {
    if (timeElapsed == -1) {
        min = 00;
        hr = 00;
    }
    timeElapsed++
    if (timeElapsed >= 60) {
        timeElapsed = 0;
        min = min + 1;
    }
    document.getElementById("time").innerHTML = 'Time Taken:' + '   ' + hr + 'hr' + '   ' + min + 'min' + '   ' + timeElapsed + 'sec';
}

function start() {
    if (timerID == -1) {
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if (timerID != -1) {
        clearInterval(timerID)
        timerID = -1
    }
}

function reset() {
    stop();
    timeElapsed = -1;
    tick()
}


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function on2() {
    document.getElementById("overlay2").style.display = "block";
    stop();
}

function off2() {
    document.getElementById("overlay2").style.display = "none";
}


function shuffle() {

    for (var row = 1; row <= 5; row++) {
        for (var column = 1; column <= 5; column++) {
            var r = Math.floor(Math.random() * 5 + 1);
            var c = Math.floor(Math.random() * 5 + 1);
            swap("tile" + row + column, "tile" + r + c); //Swap the look & feel of both cells
        }
    }
}

function mix() {

    for (var row = 1; row <= 3; row++) {
        for (var column = 1; column <= 3; column++) {

            var r = Math.floor(Math.random() * 3 + 1);
            var c = Math.floor(Math.random() * 3 + 1);

            swap("t" + row + column, "t" + r + c);
        }
    }
}

function swap(x1, x2) {
    var temp = document.getElementById(x1).style.backgroundColor;
    document.getElementById(x1).style.backgroundColor = document.getElementById(x2).style.backgroundColor;
    document.getElementById(x2).style.backgroundColor = temp;
    gameend();
}



function clickbox(row, column) {
    if (column < 5) {
        if (document.getElementById("tile" + row + (column + 1)).style.backgroundColor == "grey") {
            countadd();
            swap("tile" + row + column, "tile" + row + (column + 1));
            return;
        }
    }
    if (column > 1) {
        if (document.getElementById("tile" + row + (column - 1)).style.backgroundColor == "grey") {
            countadd();
            swap("tile" + row + column, "tile" + row + (column - 1));
            return;
        }
    }
    if (row > 1) {
        if (document.getElementById("tile" + (row - 1) + column).style.backgroundColor == "grey") {
            countadd();
            swap("tile" + row + column, "tile" + (row - 1) + column);
            return;
        }
    }
    if (row < 5) {
        if (document.getElementById("tile" + (row + 1) + column).style.backgroundColor == "grey") {
            countadd();
            swap("tile" + row + column, "tile" + (row + 1) + column);
            return;
        }
    }
}


function gameend() {
    for (var row = 1; row <= 3; row++) {
        for (var col = 1; col <= 3; col++) {
            if (document.getElementById("t" + row + col).style.backgroundColor !=
                document.getElementById("tile" + (row + 1) + (col + 1)).style.backgroundColor) {
                off2()
                return;
            }
        }
    }
    on2()

}


function loadgame() {
    mix();
    shuffle();
}