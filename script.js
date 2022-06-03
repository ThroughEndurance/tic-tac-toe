
//Here I "found" the squares form the HTML using querySelectorAll. Defined the players (lizzo and dmx). Finally I build my restart function that wipes the board and the array that tracks the moves.
const squares = document.querySelectorAll(".square")
const lizzO = "O";
const dmX = "X";
const restart = function(){
    board = ['', '', '', '', '', '', '', '', ''];
    squares.forEach((square) => {
        square.innerText= '';
    })};

//I set up my "let" variables. This includes the current player and I set up my array that tracks the moves.

let currentPlayer = lizzO
let board = ['', '', '', '', '', '', '', '', ''];

//This is the button's function. When clicked, it will run my reset function, which clears the tracking array in JS and resets all my squares visually in the HTML to ''

const btn = document.querySelector('button');
btn.addEventListener('click', function(evt){
    restart();
    console.log(board);
});

//The first part fo this code finds all my div's and gives them an event listener for clicking.

document.querySelector('div').addEventListener('click', handleClick)

//The next part of the code uses my handleClick event listener and identifies if my tracking array has a '' in it to allow the rest of the code to run.

function handleClick(evt){
    if(board[evt.target.id] === '')
    
//This part of the code changes the corresponding index of my array to the currenPlayer (an X or an O) using the target ID upon clicking on a square.     

    {
    board[evt.target.id] = (currentPlayer);

//This next section changes the text within the actual visual square to an X or an O using target.

    evt.target.innerText = currentPlayer

//Finally upon click the current player changes back and forth between lizzO and dmX each time a square is clicked. I could get rid of the console log, however it will be potentially useful for icebox items I want to incorporate later on so I'm keeping it.

    if(currentPlayer === lizzO) currentPlayer = dmX
    else {
        currentPlayer = lizzO
    } 
    console.log(board)}}
