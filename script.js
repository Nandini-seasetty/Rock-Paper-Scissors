let choices=document.querySelectorAll(".choice");
let userScorePara=document.getElementById("u-score");
let compScorePara=document.getElementById("c-score");
let userScore=0;
let compScore=0; 
let msg=document.getElementById("msg");
let userChoosen=document.getElementsByClassName("user-choosen");
const genCompChoice=()=>{
    const values=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return values[randomIdx];
};
const drawGame=()=>{
 msg.innerText="Game was Draw.Play again.";
 msg.style.backgroundColor="#081b31";
};
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    updateChoices(userChoice,compChoice);
    if(userChoice==compChoice)
        drawGame();
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="rock"?true:false;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
const updateChoices=(userChoice,compChoice)=>{
    const imageMap={
        "rock":'rock.png',
        "paper":'paper.png',
        "scissors":'scissors.png'
    };
    const userImg=document.getElementById("user-img");
    const compImg=document.getElementById("comp-img");
    userImg.src=imageMap[userChoice];
    compImg.src=imageMap[compChoice];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText=userScore;
       msg.innerText=`You Win!${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
    }
    else{
       compScore++;
       compScorePara.innerText=compScore;
       msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
       msg.style.backgroundColor="red";
    }
   };
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("clicked");
        playGame(userChoice);
    });
});