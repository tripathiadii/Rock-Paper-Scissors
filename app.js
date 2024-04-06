let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");


const drawGame = () => {
    console.log("Game was Drawed");
    msg.innerText = "Game Was drawed";
    msg.style.backgroundColor = "#081b31";
}




const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx =  Math.floor (Math.random() * 3);
    return options[randIdx];

}


const showWinner = (userWin) => {
    if(userWin) {
        msg.innerText = "you win!";
        console.log("you Win!");
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = "you lose!";
        console.log("you lose");
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }

};


const PlayGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    //genrate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    
    else{
        let userWin = true;
        if(userChoice === "rock" ){
            // paper , scissors
            userWin = compChoice ==="paper" ? false : true ;
            
        }

        else if(userChoice==="paper"){
            // scissors , rock
            userWin = compChoice ==="scissors" ? false : true;
        }

        else{
            //rock , scissors
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }


    


}


choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choicce was clicked" , userChoice);
        PlayGame(userChoice);

    });
});
