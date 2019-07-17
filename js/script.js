/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = [
  {
    quote: "It's dangerous to go alone! Take This!",
    source: "Old Man",
    citation: "The Legend of Zelda",
    year: 1987,
    tags: ["Video Games", "Nintendo"]
  },
  {
    quote: "I am the wisest man alive, for I know one thing, and that is that I know nothing.",
    source: "Socrates",
    citation: "",
    year: null,
    tags: ["Philosophy"]
  },
  {
    quote: "We all make choices in life, but in the end our choices make us.",
    source: "Andrew Ryan" ,
    citation: "Bioshock",
    year: 2007,
    tags: ["Video Games"]
  },
  {
    quote: "Do or do not, there is no try",
    source: "Yoda",
    citation: "Star Wars: The Empire Strikes Back",
    year: 1980,
    tags: ["Movies", "Sci fi"]
  },
  {
    quote: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    source: "Lao Tzu",
    citation: "",
    year: "4th Century BC",
    tags: ["Philosophy"]
  }
]

console.log(quotes);

//Sets a variable to be stored outside of getRandomQuote to reflect which quotes have already been displayed
const usedArray = [];

function getRandomQuote() {
  //Stores a random number between 0 and length of quotes array
  let randomNum = Math.floor((Math.random() * quotes.length));

  //Sets up an infinite loop to keep assigning a random number until no duplicates are returned
  while(true) {
    // Checks to see if random number has already been used. Additional check to shift to the next else if
    if(usedArray.includes(randomNum) && usedArray.length != quotes.length) {
      randomNum = Math.floor((Math.random() * quotes.length));
    } else if(usedArray.length === quotes.length) {
      //If all quotes have been displayed, this resets the usedArray so the quotes can start showing randomly again
      usedArray.length = 0;
    } else {
      //Finally if the random num doesn't match any that have already gone, it returns that num and pushes it to the usedArray
      usedArray.push(randomNum);
      return quotes[randomNum];
    }
  }
}

console.log(getRandomQuote());

//Code adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
//Generates Random Color to be generated for use in changing background for each quote
function randomColorChange(){
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ',' + b + ',' + g +")";
}

function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = "";
  //Set the quote and scource in html string using template literals
  htmlString += `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`
  //Checks to see if there's a citation and inserts if it's true
  if(randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  //Checks to see if there's a year and inserts if true
  if(randomQuote.year){
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  if(randomQuote.tags){
    //Iterates through the tags list and inserts each one
    for(tag of randomQuote.tags){
      htmlString += `<span class="citation">${tag}</span>`;
    }
  }
  //Closes the 'p' tag from orignally setting it with the source and turns the quote box inner html to the html string
  htmlString += "</p>"

  //Stores variable so it can be used twice
  let randomColor = randomColorChange();

  //Changes BG Color for both background and quote loader box so that they match
  document.body.style.backgroundColor = randomColor;
  document.getElementById("loadQuote").style.backgroundColor = randomColor;

  document.getElementById("quote-box").innerHTML = htmlString;
}

//initializes the screen with a quote, so it doesn't start blank
printQuote();

//Changes Quote and background color every 25 seconds
setInterval(() => {
  printQuote()
}, 25000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
