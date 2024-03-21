
// Here accessesed html element for target it
let startButton = document.querySelector("#btn1");
let player = document.querySelector(".palyer");
let game = document.querySelector(".game");
let newGame = document.querySelector('#newgame');
let boxes = document.querySelectorAll(".box");
let winnerPlayer = document.querySelector("#winner")
let firstPlayerScore = document.querySelector("#fplayerscore")
let secondPlayerScore = document.querySelector("#splayerscore")


/* this all code of user Prompt means user input value  in which user will give self name and it will store it and display it in main tic tac toe game*/
 

/*user prompt func in which we will access all player input field */
const userPrompt = (() => {
    let firstPlayerName = document.querySelector("#fname").value;
    let secondPlayerName = document.querySelector("#sname").value;

    if (firstPlayerName !== "" && secondPlayerName !== "") {
        setTimeout(() => {
            player.style.display = "none";
            game.style.display = "flex";


        }, 100);
    }
    else {
        alert(`Enter the both player Name before start the game`)
    }
})



/* this function will show the player Name with his win score 8 */
const showPlayerNameWithScore = (() =>{
    let firstPlayerName = document.querySelector("#fname").value;
    let secondPlayerName = document.querySelector("#sname").value;
    firstPlayerScore.innerHTML = (`${firstPlayerName} = 0 `)
    secondPlayerScore.innerHTML = (`${secondPlayerName} = 0`)
})
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.preventDefault();
    userPrompt();
    showPlayerNameWithScore();
    showTurnOfPlayer();



})

/*this func would tell the player turn what will be your turn in game */

const showTurnOfPlayer = () => {
    let firstPlayerName = document.querySelector("#fname").value;
    let secondPlayerName = document.querySelector("#sname").value;

    alert(`${firstPlayerName} your Turn will be 'X' in your game\n & ${secondPlayerName} your Turn will be 'O' in your game`)
  
}



/* this code main tic tac toe game */


/*------------------------------------------------------------------------------------*/

/*it will use to turn interChangebaly */
let isTurn = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]

]



boxes.forEach((box) => {
 
    box.addEventListener('click', () => {
      
        if (isTurn) {
            box.innerText = "O";
            box.style.color = "green"
           
            isTurn = false;
        }
         
       
       
        else {
            box.innerText = "X";
            box.style.color = "red";
            isTurn = true;
        }
        
      

        box.disabled = true;

        chekWinner();

        drawMatch();
      

    })

    
})






const chekWinner = () => {
    for (let partten of winpatterns) {

        let pos1 = boxes[partten[0]].innerText;
        let pos2 = boxes[partten[1]].innerText;
        let pos3 = boxes[partten[2]].innerText;
       

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                count = -1;

            }
        }

      

    }

}

let count = 0;
const drawMatch = (() =>{
    count++
    console.log(count);
    
    for (let partten of winpatterns) {

        let pos1 = boxes[partten[0]].innerText;
        let pos2 = boxes[partten[1]].innerText;
        let pos3 = boxes[partten[2]].innerText;
       
        if(count === 9){
            if(pos1 !== pos2 && pos2 !== pos3){
                setTimeout(() => {
                    for (let box of boxes) {
                        box.innerText = "";
                    }
                }, 2000);
               
                winnerPlayer.innerText = (`Opps! Match is draw`)
                count = 0;
                enableButton();
            }
        }
    }
})
let firstPlayerOfScoreIs = 0;
let secondPlayerofScoreIs = 0;

const showWinner = (winner) => {
    winnerPlayer.innerText = (`Congratulation,🏆 Winner is ${winner}`)
    disabledButton();
    let firstPlayerName = document.querySelector("#fname").value;
    let secondPlayerName = document.querySelector("#sname").value;
  
    setTimeout(() => {
        for (let box of boxes) {
            box.innerText = "";
        }
        enableButton();
    }, 2000);
    // enableButton();

   if(winner === "X"){
  firstPlayerScore.innerText =  (`${firstPlayerName} = ${++firstPlayerOfScoreIs}`);
   console.log("X" + 0)
   }
   else if(winner === "O"){
   secondPlayerScore.innerText = (`${secondPlayerName} = ${++secondPlayerofScoreIs}`)
    console.log("O" + 1);
   }
   else{
    console.log('Draw');
   }


}


const disabledButton = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableButton = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}


const removeText = (() => {
    for (let box of boxes) {
        box.innerText = "";
    }
})



newGame.addEventListener("click", () => {
    removeText();
    player.style.display = "flex";
    game.style.display = "none";
    winnerPlayer.innerText = "";
    count = 0;
    enableButton();
    firstPlayerOfScoreIs = 0;
    secondPlayerofScoreIs = 0;
   

})




