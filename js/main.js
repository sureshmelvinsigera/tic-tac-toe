gridButtons = document.querySelectorAll("a");   // get all the grid buttons
winMessageDiv = document.querySelector("#message"); // get win message div
let countClicks = 0;

// attach click event for each a href
gridButtons.forEach(function changeColor(currentBox) {
    let buttonStyle = currentBox.style;
    currentBox.addEventListener('click', function () {
        // In order to determine which player is playing, we can use the following logic.
        if (countClicks % 2 === 0 && buttonStyle.backgroundColor !== 'red' && buttonStyle.backgroundColor !== 'blue') {
            console.log(countClicks % 2 === 0);
            // red player
            buttonStyle.backgroundColor = 'red';
            countClicks += 1;
        } else if (buttonStyle.backgroundColor !== 'red' && buttonStyle.backgroundColor !== 'blue') {
            // blue player
            buttonStyle.backgroundColor = 'blue';
            countClicks += 1;
        }
        // verify your sanity
        // console.log(countClicks);
        pickWinner();
    })
});

function pickWinner() {
    /**
     * Algorithm to detect game winner
     */
    /*
     [0, 1, 2]
     [3, 4, 5]
     [6, 7, 8]
     */
    if (gridButtons[0].style.backgroundColor === gridButtons[1].style.backgroundColor && gridButtons[1].style.backgroundColor === gridButtons[2].style.backgroundColor && gridButtons[0].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[0].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[3].style.backgroundColor === gridButtons[4].style.backgroundColor && gridButtons[4].style.backgroundColor === gridButtons[5].style.backgroundColor && gridButtons[3].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[3].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[6].style.backgroundColor === gridButtons[7].style.backgroundColor && gridButtons[7].style.backgroundColor === gridButtons[8].style.backgroundColor && gridButtons[6].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[6].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[0].style.backgroundColor === gridButtons[3].style.backgroundColor && gridButtons[3].style.backgroundColor === gridButtons[6].style.backgroundColor && gridButtons[0].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[0].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[1].style.backgroundColor === gridButtons[4].style.backgroundColor && gridButtons[4].style.backgroundColor === gridButtons[7].style.backgroundColor && gridButtons[1].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[1].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[2].style.backgroundColor === gridButtons[5].style.backgroundColor && gridButtons[5].style.backgroundColor === gridButtons[8].style.backgroundColor && gridButtons[2].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[2].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[0].style.backgroundColor === gridButtons[4].style.backgroundColor && gridButtons[4].style.backgroundColor === gridButtons[8].style.backgroundColor && gridButtons[0].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[0].style.backgroundColor} player won the game`;
        reloadGame();
    } else if (gridButtons[2].style.backgroundColor === gridButtons[4].style.backgroundColor && gridButtons[4].style.backgroundColor === gridButtons[6].style.backgroundColor && gridButtons[2].style.backgroundColor !== "") {
        winMessageDiv.innerHTML = `${gridButtons[2].style.backgroundColor} player won the game!`;
        reloadGame();
    } else if (countClicks === 9) {
        winMessageDiv.innerHTML = `You both lose!`;
        reloadGame();
    }
}

function reloadGame() {
    // https://stackoverflow.com/questions/2787679/how-to-reload-page-every-5-seconds
    setTimeout(function () {
        window.location.reload();
    }, 2000);
}