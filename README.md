# Random Quote Generator Techdegree Project Unit 1

This is the Random Quote Generator project for TeamTreehouse's Techdegree Unit 1.
This project aims to hit the "Exceeds Expectations" mark.

# Quotes Array

Each item in the array is a Quote object containing the following:

* `quote` - The quote that was said
* `source` - Originator of said quote
* `citation` - Where quote originated, if available. null, if not.
* `year` - Year the quote originated
* `tags` - Categories the quote could be tagged in

# getRandomQuote()

A function that returns a random quote object.
First it stores a random number then sets up an infinite loop to check if the number had already been used before running through all quotes against  usedArray thats being updated with each quote object that's been used.

Once the usedArray's length is equal to the quotes' array's length, the usedArray gets reset to recycle the quotes.

Each call to getRandomQuote returns a new quote object to be used in printQuote().

# randomColorChange()

A function that generates a random color based on rgb values

Code was adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

Each R/G/B value was calculated by `Math.random()` and `Math.floor()` and then returned by concatenating the values into a `rgb()` string to be fed into printQuote. 
