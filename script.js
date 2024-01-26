let timer;
let isRunning = false;
let seconds = 0;
let setTimeInput = document.getElementById("setTime");

function startStop() {
    isRunning = !isRunning;

    if (isRunning) {
        document.getElementById("startStop").textContent = "Stop";
        startTimer();
    } else {
        document.getElementById("startStop").textContent = "Start";
        stopTimer();
    }
}


function startTimer() {
    const setTime = parseInt(setTimeInput.value) * 60;

    timer = setInterval(function() {
        if (seconds >= setTime) {
            stopTimer();
            alert("Time's up!");
            reset();
        } else {
            seconds++;
            updateDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const displayText = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    document.getElementById("display").textContent = displayText;
}

