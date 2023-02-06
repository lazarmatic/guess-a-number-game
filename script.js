let RandomNumber = Math.floor(Math.random() * 10) + 1;
let output = document.getElementById("outputtext");
var numberofguesses = 0;
var guessednumbers = [];

function submit() {
  let input = document.getElementById("userinput").value;
  if (input < 1 || input > 10) {
    document.getElementById("body").style.backgroundColor = "red";
    document.getElementById("naslov").innerHTML = "You are wrong!";
    document.getElementById("naslov").style.color = "white";
    document.getElementById("naslov").style.backgroundColor = "darkred";
    document.getElementById("pogodi").innerHTML =
      "Please enter a number between 1 and 10!";
    document.getElementById("pogodi").style.color = "white";
  } else {
    guessednumbers.push(input);
    numberofguesses += 1;
    if (input < RandomNumber) {
      document.getElementById("pp").innerHTML =
        "Your last guesses were: " + guessednumbers;
      document.getElementById("ppp").innerHTML =
        "Number of guesses are: " + numberofguesses;
      document.getElementById("naslov").style.color = "white";
      document.getElementById("naslov").style.backgroundColor = "brown";
      document.getElementById("body").style.backgroundColor = "orange";
      document.getElementById("naslov").innerHTML = "You are wrong!";
      document.getElementById("pogodi").innerHTML = "Your number is too low!";
      document.getElementById("pogodi").style.color = "white";
    }
  }
  if (input == RandomNumber) {
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("naslov").innerHTML =
      "You guessed right in " + numberofguesses + " tries!";
    document.getElementById("naslov").style.color = "white";
    document.getElementById("naslov").style.backgroundColor = "darkgreen";
    document.getElementById("pogodi").innerHTML =
      "Your secret number was " + RandomNumber;
    document.getElementById("pogodi").style.color = "white";
    document.getElementById("pogodi").style.color = "white";
  } else if (input > RandomNumber) {
    document.getElementById("pp").innerHTML =
      "Your last guesses were: " + guessednumbers;
    document.getElementById("ppp").innerHTML =
      "Number of guesses are: " + numberofguesses;
    document.getElementById("naslov").style.color = "white";
    document.getElementById("naslov").style.backgroundColor = "brown";
    document.getElementById("body").style.backgroundColor = "orange";
    document.getElementById("naslov").innerHTML = "You are wrong!";
    document.getElementById("pogodi").innerHTML = "Your number is too high!";
    document.getElementById("pogodi").style.color = "white";
  }
  if (input == RandomNumber && numberofguesses == 1) {
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("naslov").innerHTML =
      "You guessed right in FIRST TRY!";
    document.getElementById("naslov").style.color = "white";
    document.getElementById("naslov").style.backgroundColor = "darkgreen";
    document.getElementById("pogodi").innerHTML =
      "Your secret number was " + RandomNumber;
    document.getElementById("pogodi").style.color = "white";
    document.getElementById("pogodi").style.color = "white";
  }
  if (numberofguesses > 5) {
    document.getElementById("body").style.backgroundColor = "red";
    document.getElementById("naslov").innerHTML = "You are out of tries";
    document.getElementById("naslov").style.color = "white";
    document.getElementById("naslov").style.backgroundColor = "darkred";
    document.getElementById("pogodi").innerHTML = "Please play again";
    document.getElementById("pogodi").style.color = "white";
  }
}

function playagain() {
  location.reload();
}
