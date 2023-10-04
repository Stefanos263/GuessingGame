let maximum =parseInt( prompt("Enter your maximum number!"));
while (!maximum){
    maximum=parseInt(prompt("enter a valid Number!"));
}
const targetNum = Math.floor(Math.random() * maximum) +1 ;
console.log(targetNum);
let guess =prompt("Enter your first guess! (Type `q` to quit!)");
let attempts = 1;
while ( parseInt(guess!==targetNum)){
    if (guess === "q")break;
    guess =parseInt(guess);
    if(guess>targetNum){
       guess =prompt("Too High!Enter a new guess:");
       attempts++;
    }else if (guess < targetNum){
        guess =prompt("Too Low!Enter a new guess:");
        attempts++;
    }else {
      guess=prompt("invalid guess. please enter a nymber or `q` to quit!")   
    }
}
if(guess === "q"){
    console.log("OK,YOU QUIT!")
}else{
    console.log("GONGRATS YOU WIN!");
console.log(`YOU GOT IT!it took you ${attempts} guesses`);
}