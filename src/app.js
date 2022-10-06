/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".number").innerHTML = generateRandomNumber();
  let suitvalue = generateRandomSuit();
  document.querySelector(".suit").innerHTML = suitvalue;
  document.getElementById("bottom").innerHTML = suitvalue;
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  if (suit[indexSuit] === "♦" || suit[indexSuit] === "♥") {
    let color = document.getElementsByClassName("suit");
    let colorArray = [...color];
    colorArray.map(element => {
      element.style.color = "red";
      return element;
    });
    console.log(color);
  }
  return suit[indexSuit];
};
