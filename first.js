let useScore = 0;
let compScore = 0;  

let choices = document.querySelectorAll('.choice');
let msg = document.getElementById('msg');
let usersc = document.getElementById('usersc');
let compsc = document.getElementById('compsc');


const gencompchoice = () => {
    const compchoices = ['Rock', 'Paper', 'Scissors'];
    const randomnum = Math.floor(Math.random() * 3); // generates a random number between 0 and 2
    return compchoices[randomnum];
}

const playGame = (userchoice) => {
    console.log("Game started with user choice: " + userchoice);
    // Game logic will be implemented here
    const compchoice = gencompchoice();
    console.log("Computer choice is: " + compchoice);

    //logic

    if (userchoice === compchoice) {
        console.log("It's a tie!");
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "grey";
    } else if (
        (userchoice === "Rock" && compchoice === "Scissors") ||
        (userchoice === "Paper" && compchoice === "Rock") ||
        (userchoice === "Scissors" && compchoice === "Paper")
    ) {
        useScore++;
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "Green";
        usersc.innerText = "User: " + useScore;
    } else {
        compScore++;
        console.log("Computer wins!");
        msg.innerText = "Computer wins!";
        msg.style.backgroundColor = "Red";
        compsc.innerText = "Computer: " + compScore;
    }
}

choices.forEach((choice) => { 
    choice.addEventListener("click", ()=>{
        const userchoice = choice.id;
        playGame(userchoice);
    })
 })