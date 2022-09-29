const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let wordQueue;
let highlightPosition;

function startGame() {
  console.log("Game started!");

  let quoteText = "type me"; // [ '<span>type</span>', '<span>me</span>' ]
  wordQueue = quoteText.split(' '); // ['type', 'me']
  quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join(''); // <span>type</span><span>me</span>

  highlightPosition = 0;
  quote.childNodes[highlightPosition].className = 'highlight';
}

function checkInput() {
  const currentWord = wordQueue[0];
  const typedValue = input.value.trim();
  
  if (currentWord !== typedValue) {
    input.className = currentWord.startsWith(typedValue) ? "" : "error";
    return;
  }

  wordQueue.shift(); // remove the first item from the array, making the next item our new `currentWord`
  input.value = '';

  quote.childNodes[highlightPosition].className = ""; // [0] == '<span>type</span>'
  highlightPosition++; // [0] ++ [1]                          
  quote.childNodes[highlightPosition].className = 'highlight'; // [1] == '<span>me</span>'
}
start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);