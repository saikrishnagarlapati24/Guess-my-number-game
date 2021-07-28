'use strict';

// console.log(document.querySelector('.right').textContent); 
// document.querySelector('.message').textContent= 'Hi hello'; 
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent=10;

// console.log(document.querySelector('.guess').value); 
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value); 

// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value)
// }); 

//equivalent method
// const eh = function(){
//     console.log(document.querySelector('.guess').value);
//     if(document.querySelector('.guess').value == 23)
//     document.querySelector('.message').textContent = "superb";
//     else
//     document.querySelector('.message').textContent = "wrong answer";
// }
// document.querySelector('.check').addEventListener('click', eh); 


let num = Math.trunc(Math.random()*20) +1 ;
let score=20;
let bool = false;
let highscore = 0;
// let eh = function(str){// WHY IS THIS NOT WORKING??
let eh = function(){
    let guess = Number(document.querySelector('.guess').value);
    if(guess){//see notes for this logic
        if(guess === num && bool == false){
            //document.querySelector('.message').textContent = str;
            document.querySelector('.message').textContent = "correct!!. CLick Again.";
            document.querySelector('.score').textContent = ++score;
            document.querySelector('.number').textContent= num;
            document.querySelector('body').style.backgroundColor = '#60bf37';
            document.querySelector('.number').style.width = '30rem';
            bool = true;
            if(score>highscore)highscore=score;
        }
        else if(guess< num && bool == false){
            document.querySelector('.score').textContent = score==0 ? 0 : --score;
            document.querySelector('.message').textContent = "lower!!";
        }
        else if(guess> num && bool == false){
            document.querySelector('.score').textContent = score==0 ? 0 : --score;
            document.querySelector('.message').textContent = "Higher!";
        }
    }
    else{
        document.querySelector('.message').textContent = 'No number';
    }
}
document.querySelector('.check').addEventListener('click', eh); 
// document.querySelector('.check').addEventListener('click', eh('correct!!')); //BASICALLY IT IS NOT WORKING WHEN IT A FUNCTION IS CALLED WITH PARENTHESIS () EVEN WITHOUT ANY PARAMETERS

let gh = function(){
    document.querySelector('.message').textContent = "Start guessing";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value="";
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent= "?";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    bool=false;
}
document.querySelector('.again').addEventListener('click', gh);

