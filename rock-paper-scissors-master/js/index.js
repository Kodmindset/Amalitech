
window.onload = function(){
    
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
     document.querySelector(".score h1").innerText=NumOfScore;
     
     const stagehands = document.querySelector(".hands");
     const stagebonus = document.querySelector(".bonus");
     const showDefault =0;


    if(NumOfScore>=12){
       stagehands.style.display="none";
       stagebonus.style.display="flex";
    } else if (NumOfScore<1){
        document.querySelector(".score h1").innerText = showDefault;
       stagebonus.style.display="none";
       stagehands.style.display="flex";
      
      
    }
    else{
        stagebonus.style.display="none";
        stagehands.style.display="flex";
    }
   
}

let NumOfScore= JSON.parse(localStorage.getItem('score'));



const pickUserHand = (hand) => {
  


    /*hind the current page*/
    let hands = document.querySelector(".hands");
    hands.style.display= "none";

    /*show the next page when clicked*/
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    let bonus = document.querySelector(".bonus");
    bonus.style.display = "none";



   
    let paperStage1 = document.querySelector(".stage1");
    let scissorsStage2 = document.querySelector(".stage2");
    let rockStage3 = document.querySelector(".stage3");
    let spockStage9 = document.querySelector(".stage9");
    let lizardStage10 = document.querySelector(".stage10");



    
    if(hand=="rock"){
       
        scissorsStage2.style.display= "none";
        paperStage1.style.display= "none";
        spockStage9.style.display= "none";
        lizardStage10.style.display= "none";

        rockStage3.style.display= "flex";
    }
    else if(hand=="paper"){
        scissorsStage2.style.display= "none";
        rockStage3.style.display= "none";
        spockStage9.style.display= "none";
        lizardStage10.style.display= "none";
       
        paperStage1.style.display= "flex";
    }
    else if(hand=="scissors"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
        spockStage9.style.display= "none";
        lizardStage10.style.display= "none";
       
        scissorsStage2.style.display= "flex";

    }
    else if(hand=="spock"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
        lizardStage10.style.display= "none";
        scissorsStage2.style.display= "none";
        
        spockStage9.style.display= "flex";

    }
    else if(hand=="lizard"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
        scissorsStage2.style.display= "none";
        spockStage9.style.display= "none";
        
       
       
        lizardStage10.style.display= "flex";

    }
    //let cphand=pickComputerHand();
   // referee1(hand,cphand);
   // pickReferee();
   //let cphand=pickComputerHand2();
   // referee1(hand,cphand);
   
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
    document.querySelector(".score h1").innerText=NumOfScore;
    const showDefault =0;
   
    if(NumOfScore>=12){
        let cphand=pickComputerHand2();
        referee2(hand,cphand);
    } 
    else if (NumOfScore<1){
        document.querySelector(".score h1").innerText = showDefault;
        let cphand=pickComputerHand();
        referee1(hand,cphand);
    }
    
    else{
        let cphand=pickComputerHand();
        referee1(hand,cphand);
      
    }
  


  



}


const pickComputerHand = ()=>{
    let paperStage4 = document.querySelector(".stage4");
    let scissorsStage5 = document.querySelector(".stage5");
    let rockStage6 = document.querySelector(".stage6");

    let spockStage7 = document.querySelector(".stage7");
    let lizardStage8 = document.querySelector(".stage8");
   

    let hands=["rock", "paper","scissors"]
    let cphands= hands[Math.floor(Math.random()*3)]
   
    if(cphands=="paper"){
       
        scissorsStage5.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";

        paperStage4.style.display= "flex";
    }
    else if(cphands=="scissors"){
        paperStage4.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
        console.log(cphands)
       
        scissorsStage5.style.display= "flex";
    }
    else if(cphands=="rock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
       
        rockStage6.style.display= "flex";
        console.log(cphands)
    }
    
    return cphands;
  
}
const pickComputerHand2 = ()=>{
    let paperStage4 = document.querySelector(".stage4");
    let scissorsStage5 = document.querySelector(".stage5");
    let rockStage6 = document.querySelector(".stage6");
    let spockStage7 = document.querySelector(".stage7");
    let lizardStage8 = document.querySelector(".stage8");

    let hands=["rock", "paper","scissors","spock","lizard"]
    let cphands= hands[Math.floor(Math.random()*5)]
   
    if(cphands=="paper"){
       
        scissorsStage5.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";

        paperStage4.style.display= "flex";
    }
    else if(cphands=="scissors"){
        paperStage4.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
       
        scissorsStage5.style.display= "flex";
    }
    else if(cphands=="rock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
        rockStage6.style.display= "flex";
        
    }
    else if(cphands=="spock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        lizardStage8.style.display= "none";
        rockStage6.style.display= "none";

        spockStage7.style.display= "flex";
        
    }
    else if(cphands=="lizard"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        spockStage7.style.display= "none";
        rockStage6.style.display= "none";
       
       
        lizardStage8.style.display= "flex";
    }
    
    return cphands;
  
}

const referee1 =(userHand,cphand)=>{
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
const referee2 =(userHand,cphand)=>{
    if(userHand =="paper" && cphand=="scissors"){
    setDecision("YOU LOSE!")
    }
    else if(userHand =="paper" && cphand=="rock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="paper" && cphand=="spock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="paper" && cphand=="lizard"){
        setDecision("YOU LOSE!");
        }
    else if(userHand =="paper" && cphand=="paper"){
        setDecision("It's a tie!")
        }
        //rock
    else if(userHand =="rock" && cphand=="scissors"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="rock" && cphand=="spock"){
        setDecision("YOU LOSE!")
        }
    else if(userHand =="rock" && cphand=="lizard"){
        setDecision("YOU WIN!");
        setScore(NumOfScore + 1);
        }
    else if(userHand =="rock" && cphand=="paper"){
        setDecision("YOU LOSE!")
        }

    else if(userHand =="rock" && cphand=="rock"){
        setDecision("It's a tie!")
        }
        //scissors
    else if(userHand =="scissors" && cphand=="rock"){
        setDecision("YOU LOSE!")
        }
    else if(userHand =="scissors" && cphand=="paper"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="scissors" && cphand=="spock"){
        setDecision("YOU LOSE!");
        }
    else if(userHand =="scissors" && cphand=="lizard"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="scissors" && cphand=="scissors"){
        setDecision("It's a tie!");
        }

        //new
        //lizard
    else if(userHand =="lizard" && cphand=="spock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="lizard" && cphand=="scissors"){
        setDecision("YOU LOSE!");
        }
    else if(userHand =="lizard" && cphand=="paper"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="lizard" && cphand=="rock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="lizard" && cphand=="lizard"){
        setDecision("It's a tie!");
        }

//spock
    else if(userHand =="spock" && cphand=="rock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    else if(userHand =="spock" && cphand=="scissors"){
        setDecision("YOU WIN!");
        setScore(NumOfScore + 1);
        }
    else if(userHand =="spock" && cphand=="paper"){
        setDecision("YOU LOSE!");
        }
    else if(userHand =="spock" && cphand=="lizard"){
        setDecision("YOU LOSE!");
        }
    else if(userHand =="spock" && cphand=="spock"){
        setDecision("It's a tie!");
        }

}

// decision to pick referee
const pickReferee =()=>{
    if(NumOfScore>=12){
        referee2(hand,cphand);
    }
    else{
        referee1(hand,cphand);
    }
}
/*Play New Game */
const newGame =()=>{
     /*hind the current page*/
     
 
     /*show the next page when clicked*/
     let contest = document.querySelector(".contest");
     contest.style.display = "none";
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
    const stagehands = document.querySelector(".hands");
    const stagebonus = document.querySelector(".bonus");
    const showDefault =0;


    if(NumOfScore>=12){
       stagehands.style.display="none";
       stagebonus.style.display="flex";
    } else if (NumOfScore<1){
        document.querySelector(".score h1").innerText = showDefault;
       stagebonus.style.display="none";
       stagehands.style.display="flex";
      
      
    }
    else{
        stagebonus.style.display="none";
        stagehands.style.display="flex";
    }

}
const RulesOnClick =()=>{
     /*hind the current page*/
    
     let contest = document.querySelector(".contest");
     contest.style.display = "none";
    const stagehands = document.querySelector(".hands");
    const stagebonus = document.querySelector(".bonus");
    stagehands.style.display = "none";
    stagebonus.style.display = "none";
     /*show the Rules page when clicked*/
    const showImage =document.querySelector(".showRuleImage");
    showImage.style.display="flex";
    
   

    const ShowRules =document.querySelector(".ShowRules");
    ShowRules.style.display="none";
}
const CloseOnClick =()=>{
     /*hind the current page*/
     
 
     /*show the next page when clicked*/
     let NumOfScore= JSON.parse(localStorage.getItem('score'));
     
     const rules_image =document.querySelector(".rules_image");
    rules_image.style.display="none";
    const close =document.querySelector(".close");
    close.style.display="none";
    
    const rules = document.querySelector(".ShowRules");
    rules.style.display="flex";


    const stagehands = document.querySelector(".hands");
    const stagebonus = document.querySelector(".bonus");
    const showDefault =0;


   if(NumOfScore>=12){
      stagehands.style.display="none";
      stagebonus.style.display="flex";
   } else if (NumOfScore<1){
       document.querySelector(".score h1").innerText = showDefault;
      stagebonus.style.display="none";
      stagehands.style.display="flex";
     
     
   }
   else{
       stagebonus.style.display="none";
       stagehands.style.display="flex";
   }
    
      


   


    
}



const setDecision =(decision)=>{

    document.querySelector(".decision h1").innerText = decision;
}

const setScore =(score)=>{
    NumOfScore = score;
    let new_data = document.querySelector(".score h1").innerText = score;

    

  if(localStorage.getItem('score')==null){
        localStorage.setItem('score',0);
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


   