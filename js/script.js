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
    category: "Video Games"
  },
  {
    quote: "I am the wisest man alive, for I know one thing, and that is that I know nothing.",
    source: "Socrates",
    citation: "",
    category: "Philosophy"
  },
  {
    quote: "3",
    source: "3" ,
    citation: "",
    //year: ,
    category: ""
  },
  {
    quote: "4",
    source: "4",
    citation: "",
    //year:,
    category: ""
  },
  {
    quote: "5",
    source: "5",
    citation: "",
  //  year:,
    category: ""
  }
]

//Sets a variable to be stored outside of getRandomQuote to reflect which quotes have already been displayed
const usedArray = [];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  //Stores a random number between 0 and length of quotes array
  let randomNum = Math.floor((Math.random() * quotes.length)+1);

  //Sets up an infinite loop to keep assigning a random number until no duplicates are returned
  while(true) {
    // Checks to see if random number has already been used. Additional check to shift to the next else if
    if(usedArray.includes(randomNum) && usedArray.length != quotes.length) {
      randomNum = Math.floor((Math.random() * quotes.length)+1);
    } else if(usedArray.length === quotes.length) {
      //If all quotes have been displayed, this resets the usedArray so the quotes can start showing randomly again
      usedArray.length = 0;
    } else {
      //Finally if the random num doesn't match any that have already gone, it returns that num and pushes it to the usedArray
      usedArray.push(randomNum);
      return randomNum;
    }
  }
}



/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {

}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
