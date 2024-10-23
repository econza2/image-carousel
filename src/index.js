import "./styles.css";

let array = [];

const imageOne = document.querySelector(".image1");
const imageTwo = document.querySelector(".image2");
const imageThree = document.querySelector(".image3");
const imageFour = document.querySelector(".image4");
const imageFive = document.querySelector(".image5");
const imageSix = document.querySelector(".image6");
const imageSeven = document.querySelector(".image7");

const buttonOne = document.querySelector(".button1");
const buttonTwo = document.querySelector(".button2");
const buttonThree = document.querySelector(".button3");
const buttonFour = document.querySelector(".button4");
const buttonFive = document.querySelector(".button5");
const buttonSix = document.querySelector(".button6");
const buttonSeven = document.querySelector(".button7");

buttonOne.addEventListener("click", () => {
  imageOne.style.gridColumn = "4";
  imageTwo.style.gridColumn = "5";
  imageThree.style.gridColumn = "6";
  imageFour.style.gridColumn = "7";
  imageFive.style.gridColumn = "1";
  imageSix.style.gridColumn = "2";
  imageSeven.style.gridColumn = "3";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("1");

  buttonOne.style.backgroundColor = "red";
  buttonTwo.style.backgroundColor = "gray";
  buttonThree.style.backgroundColor = "gray";
  buttonFour.style.backgroundColor = "gray";
  buttonFive.style.backgroundColor = "gray";
  buttonSix.style.backgroundColor = "gray";
  buttonSeven.style.backgroundColor = "gray";

  setInterval(() => {
    buttonTwo.dispatchEvent(clickEvent);
  }, 5000);
});

buttonTwo.addEventListener("click", () => {
  imageOne.style.gridColumn = "5";
  imageTwo.style.gridColumn = "6";
  imageThree.style.gridColumn = "7";
  imageFour.style.gridColumn = "1";
  imageFive.style.gridColumn = "2";
  imageSix.style.gridColumn = "3";
  imageSeven.style.gridColumn = "4";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("2");

  buttonOne.style.backgroundColor = "gray";
  buttonTwo.style.backgroundColor = "red";
  buttonThree.style.backgroundColor = "gray";
  buttonFour.style.backgroundColor = "gray";
  buttonFive.style.backgroundColor = "gray";
  buttonSix.style.backgroundColor = "gray";
  buttonSeven.style.backgroundColor = "gray";

  setInterval(() => {
    buttonThree.dispatchEvent(clickEvent);
  }, 5000);
});

buttonThree.addEventListener("click", () => {
  imageOne.style.gridColumn = "6";
  imageTwo.style.gridColumn = "7";
  imageThree.style.gridColumn = "1";
  imageFour.style.gridColumn = "2";
  imageFive.style.gridColumn = "3";
  imageSix.style.gridColumn = "4";
  imageSeven.style.gridColumn = "5";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("3");

  buttonOne.style.backgroundColor = "gray";
  buttonTwo.style.backgroundColor = "gray";
  buttonThree.style.backgroundColor = "red";
  buttonFour.style.backgroundColor = "gray";
  buttonFive.style.backgroundColor = "gray";
  buttonSix.style.backgroundColor = "gray";
  buttonSeven.style.backgroundColor = "gray";

  setInterval(() => {
    buttonFour.dispatchEvent(clickEvent);
  }, 5000);
});

buttonFour.addEventListener("click", () => {
  imageOne.style.gridColumn = "7";
  imageTwo.style.gridColumn = "1";
  imageThree.style.gridColumn = "2";
  imageFour.style.gridColumn = "3";
  imageFive.style.gridColumn = "4";
  imageSix.style.gridColumn = "5";
  imageSeven.style.gridColumn = "6";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("4");

  buttonOne.style.backgroundColor = "gray";
  buttonTwo.style.backgroundColor = "gray";
  buttonThree.style.backgroundColor = "gray";
  buttonFour.style.backgroundColor = "red";
  buttonFive.style.backgroundColor = "gray";
  buttonSix.style.backgroundColor = "gray";
  buttonSeven.style.backgroundColor = "gray";

  setInterval(() => {
    buttonFive.dispatchEvent(clickEvent);
  }, 5000);
});

buttonFive.addEventListener("click", () => {
  imageOne.style.gridColumn = "1";
  imageTwo.style.gridColumn = "2";
  imageThree.style.gridColumn = "3";
  imageFour.style.gridColumn = "4";
  imageFive.style.gridColumn = "5";
  imageSix.style.gridColumn = "6";
  imageSeven.style.gridColumn = "7";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("5");

  buttonOne.style.backgroundColor = "gray";
  buttonTwo.style.backgroundColor = "gray";
  buttonThree.style.backgroundColor = "gray";
  buttonFour.style.backgroundColor = "gray";
  buttonFive.style.backgroundColor = "red";
  buttonSix.style.backgroundColor = "gray";
  buttonSeven.style.backgroundColor = "gray";

  setInterval(() => {
    buttonSix.dispatchEvent(clickEvent);
  }, 5000);
});

buttonSix.addEventListener("click", () => {
  imageOne.style.gridColumn = "2";
  imageTwo.style.gridColumn = "3";
  imageThree.style.gridColumn = "4";
  imageFour.style.gridColumn = "5";
  imageFive.style.gridColumn = "6";
  imageSix.style.gridColumn = "7";
  imageSeven.style.gridColumn = "1";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("6");

  buttonOne.style.backgroundColor = "gray";
  buttonTwo.style.backgroundColor = "gray";
  buttonThree.style.backgroundColor = "gray";
  buttonFour.style.backgroundColor = "gray";
  buttonFive.style.backgroundColor = "gray";
  buttonSix.style.backgroundColor = "red";
  buttonSeven.style.backgroundColor = "gray";

  setInterval(() => {
    buttonSeven.dispatchEvent(clickEvent);
  }, 5000);
});

buttonSeven.addEventListener("click", () => {
  imageOne.style.gridColumn = "3";
  imageTwo.style.gridColumn = "4";
  imageThree.style.gridColumn = "5";
  imageFour.style.gridColumn = "6";
  imageFive.style.gridColumn = "7";
  imageSix.style.gridColumn = "1";
  imageSeven.style.gridColumn = "2";

  imageOne.style.gridRow = "1";
  imageTwo.style.gridRow = "1";
  imageThree.style.gridRow = "1";
  imageFour.style.gridRow = "1";
  imageFive.style.gridRow = "1";
  imageSix.style.gridRow = "1";
  imageSeven.style.gridRow = "1";

  array.push("7");

  buttonOne.style.backgroundColor = "gray";
  buttonTwo.style.backgroundColor = "gray";
  buttonThree.style.backgroundColor = "gray";
  buttonFour.style.backgroundColor = "gray";
  buttonFive.style.backgroundColor = "gray";
  buttonSix.style.backgroundColor = "gray";
  buttonSeven.style.backgroundColor = "red";

  setInterval(() => {
    buttonOne.dispatchEvent(clickEvent);
  }, 5000);
});

let clickEvent = new Event("click");

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

nextButton.addEventListener("click", () => {
  if (array.length === 0) {
    buttonOne.dispatchEvent(clickEvent);
  } else if (array.length > 0) {
    if (array[array.length - 1] === "1") {
      buttonTwo.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "2") {
      buttonThree.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "3") {
      buttonFour.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "4") {
      buttonFive.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "5") {
      buttonSix.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "6") {
      buttonSeven.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "7") {
      buttonOne.dispatchEvent(clickEvent);
    }
  }
});

previousButton.addEventListener("click", () => {
  if (array.length === 0) {
    buttonOne.dispatchEvent(clickEvent);
    console.log(array);
  } else if (array.length > 0) {
    if (array[array.length - 1] === "3") {
      buttonTwo.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "4") {
      buttonThree.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "5") {
      buttonFour.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "6") {
      buttonFive.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "7") {
      buttonSix.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "1") {
      buttonSeven.dispatchEvent(clickEvent);
    } else if (array[array.length - 1] === "2") {
      buttonOne.dispatchEvent(clickEvent);
    }
  }
});

window.addEventListener("load", () => {
  //   buttonOne.dispatchEvent(clickEvent);
  setInterval(() => {
    buttonOne.dispatchEvent(clickEvent);
  }, 5000);
});
