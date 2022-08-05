"use strict";

let quoteBlock = document.getElementsByClassName("quote-block");
let quote = document.getElementById("quote");
let authorBlock = document.getElementById("author");
let randomiseButton = document.getElementsByClassName("randomise-button");

let quotesList = [
  {
    quote: "Be yourself, everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything",
    author: "Mark Twain",
  },
];

let max = quotesList.length - 2;
let min = 0;

function randomise() {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + 1);
  quote.innerText = '"' + quotesList[randomNumber].quote + '"';
  authorBlock.innerText = quotesList[randomNumber].author;
}
