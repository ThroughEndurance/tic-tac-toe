//WORKING NOTESdefine my constants here
// "squareS" is not "square". not sure if the class name of just "square" would cause a conflict due to the class name.
//FINAL NOTES: Constants should go here
const squares = document.querySelectorAll(".square")
const lizzO = "O";
const dmX = "X";
const restart = function(){
    board = ['', '', '', '', '', '', '', '', ''];
    squares.forEach((square) => {
        square.innerText= '';
    })};

// const allowed = (square) => {
//     if (square.innerText === 'X' || square.innerText === 'O'){
//         return false;
//     }
//     return true;
// };


//Final NOTES: Lets should go here

let currentPlayer = lizzO
let board = ['', '', '', '', '', '', '', '', ''];


//WORKING NOTES: This is the reset button. I need to have it reset the gameboard to blank. Right now it just console logs so we can confirm something happens
//when it clicks.
//info on button is in wordle recording around 33 min mark for placing button --- reset info is later hinted at but not
//explaine fully.
//we could maybe use textContent to clear out the squares??

//FINAL NOTES:



const btn = document.querySelector('button');
btn.addEventListener('click', function(evt){
    restart();    
    console.log(evt)
});







// WORKING NOTES: Use "this" within event listeners in order to target the specific element we want an X or O to get placed?? Maybe....
//click listeners are explained in wordle recording at ~1:42.......... 
// I'll try to use "event bubbling" principles to keep click listener code dry for the squares
// const squares = document.querySelectorAll('div')   idk if I need this or not commented out temporarily

//FINAL NOTES: Below function identifies where in the grid we clicked and adds an O to it.

document.querySelector('div').addEventListener('click', handleClick)
function handleClick(evt){
    if(board[evt.target.id] === ''){
    board[evt.target.id] = (currentPlayer);


    evt.target.innerText = currentPlayer


    if(currentPlayer === lizzO) currentPlayer = dmX
    else {
        currentPlayer = lizzO
    } 
    console.log(board)}}


// currentPlayer = currentPlayer === lizzO ? dmX : lizzO; Tutor taught me this shorthand version but I could use
//a deeper explaination of it. If/else statements written out the long way are much easier to read.


//This below code does the same thing as the above code. Supposedly it is a better "real word" way of getting
//the correct target due to how querySelector works. Above is how we did it in class in the wordle example so I'll try
//to use the above code first, and resort to the bottom code if I run into errors. 
//Note that the (x)=>handleClick(x) is essentially the same as just handleClick, handleClick is shorthand but limits
//use of the event listener (or so we are told)

// const squares = document.querySelectorAll(".square");
// squares.forEach((square) => square.addEventListener("click", (x)=>handleClick(x)));
// function handleClick(clickedSquare){
//        console.log(clickedSquare.target.id)
//        clickedSquare.target.innerText = lizzO
// }


//at this point I have my grid, reset button shell, and I can place alternating x's and o's. I now need to limit the 
//placement to only empty squares, and finalize the reset button. 

//bonus objectives are still needed.