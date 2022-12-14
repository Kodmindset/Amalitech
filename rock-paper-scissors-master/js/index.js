
window.onload = function(){
    
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
     document.querySelector(".score h1").innerText=NumOfScore;
   
}

let NumOfScore= JSON.parse(localStorage.getItem('score'));



const pickUserHand = (hand) => {
  


    /*hind the current page*/
    let hands = document.querySelector(".hands");
    hands.style.display= "none";

    /*show the next page when clicked*/
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";



   
    let paperStage1 = document.querySelector(".stage1");
    let scissorsStage2 = document.querySelector(".stage2");
    let rockStage3 = document.querySelector(".stage3");

    
    if(hand=="rock"){
       
        scissorsStage2.style.display= "none";
        paperStage1.style.display= "none";

        rockStage3.style.display= "flex";
    }
    else if(hand=="paper"){
        scissorsStage2.style.display= "none";
        rockStage3.style.display= "none";

       
        paperStage1.style.display= "flex";
    }
    else if(hand=="scissors"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
       
       
        scissorsStage2.style.display= "flex";

    }
    let cphand=pickComputerHand();
    referee(hand,cphand);
   
}


const pickComputerHand = ()=>{
    let paperStage4 = document.querySelector(".stage4");
    let scissorsStage5 = document.querySelector(".stage5");
    let rockStage6 = document.querySelector(".stage6");

    let hands=["rock", "paper","scissors"]
    let cphands= hands[Math.floor(Math.random()*3)]
   
    if(cphands=="paper"){
        console.log(cphands)
        scissorsStage5.style.display= "none";
        rockStage6.style.display= "none";

        paperStage4.style.display= "flex";
    }
    else if(cphands=="scissors"){
        paperStage4.style.display= "none";
        rockStage6.style.display= "none";
        console.log(cphands)
       
        scissorsStage5.style.display= "flex";
    }
    else if(cphands=="rock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
       
       
        rockStage6.style.display= "flex";
        console.log(cphands)
    }
    
    return cphands;
  
}

const referee =(userHand,cphand)=>{
    if(userHand =="paper" && cphand=="scissors"){
    setDecision("YOU LOSE!")
    }
    else if(userHand =="paper" && cphand=="rock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="paper" && cphand=="paper"){
        setDecision("It's a tie!")
        }
    else if(userHand =="rock" && cphand=="scissors"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="rock" && cphand=="paper"){
        setDecision("YOU LOSE!")
        }
    else if(userHand =="rock" && cphand=="rock"){
        setDecision("It's a tie!")
        }
    else if(userHand =="scissors" && cphand=="rock"){
        setDecision("YOU LOSE!")
        }
    else if(userHand =="scissors" && cphand=="paper"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="scissors" && cphand=="scissors"){
        setDecision("It's a tie!")
        }

}
/*Play New Game */
const newGame =()=>{
     /*hind the current page*/
     let hands = document.querySelector(".hands");
     hands.style.display= "flex";
 
     /*show the next page when clicked*/
     let contest = document.querySelector(".contest");
     contest.style.display = "none";

}
const setDecision =(decision)=>{

    document.querySelector(".decision h1").innerText = decision;
}

const setScore =(score)=>{
    NumOfScore = score;
    let new_data = document.querySelector(".score h1").innerText = score;

    

  if(localStorage.getItem('score')==null){
        localStorage.setItem('score','[]');
    }
    
    // get old data and add to new data
    let old_data= JSON.parse(localStorage.getItem('score'));
    old_data = old_data + 1;
    
    // now save oldd data + new data to the local storage
    score=localStorage.setItem('score', JSON.parse(old_data));

   
   NumOfScore = JSON.parseInt(score);

}



const saveToLocalMemory =()=>{
    // get new data from the accomolated score

}



/*  if(localStorage.getItem('data')==null){
        localStorage.setItem('data','[]');
    }
    
    // get old data and add to new data
    let old_data= JSON.parse(localStorage.getItem('data'));
    old_data.push(3);
    
    // now save oldd data + new data to the local storage
    score = localStorage.setItem('data',JSON.stringify(old_data));

   document.querySelector(".score h1").innerText = score;*/


   