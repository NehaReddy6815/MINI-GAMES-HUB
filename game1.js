let secretNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

function checkGuess() {
    let input = document.getElementById("Guessinput");
    let Guess = parseInt(input.value);
    let result = document.getElementById("Results");
    let attempts = document.getElementById("Attempts");


    tries++;

    if (Guess == secretNumber) {
        result.innerText = "🎉you guessed it right!!!👍👍";
    }
    else if (Guess < secretNumber) {
        result.innerText = "📉too low!!";
    }
    else {
        result.innerText = "📈 too high!!";
    }

    attempts.innerText = "Attempts: " + tries;
}
