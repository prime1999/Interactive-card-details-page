//Declaring global variables
const form = document.querySelector("form");
const content = document.querySelector("#content");
const cardName = document.querySelector("#card-name-input");
const cardNumber = document.querySelector("#card-number-input");
const cardDate = document.querySelector("#card-date");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCvc = document.querySelector("#card-cvc");
const holderName = document.querySelectorAll("#name");
const number = document.querySelectorAll("#number");
const date = document.querySelectorAll("#date");
const cvc = document.querySelectorAll("#cvc");

let cardNameValue;
let cardNumberValue;
let cardMonthValue;
let cardYearValue;
let cardCvcValue;

//Function to validate Card name
function cardNameValidation() {
  cardNameValue = cardName.value;
  if (cardNameValue === "") {
    showError(cardName, "Holder's name cannot be blank");
  } else {
    holderName.forEach((holder) => (holder.innerText = cardNameValue));
    showsuccess(cardName);
  }
  cardName.value = "";
}

//Function to validate Card number
function cardNumberValidation() {
  cardNumberValue = cardNumber.value;

  if (cardNumberValue === "") {
    showError(cardNumber, "Card number cannot be blank");
  } else if (cardNumberValue.length < 16) {
    showError(cardNumber, "Please input a correct card number");
  } else {
    let input = cardNumberValue.match(/\d{1,4}/g);
    let output = input.join(" ");
    number.forEach((number) => (number.innerText = output));
    showsuccess(cardNumber);
  }
  cardNumber.value = "";
}

//Function to validate date
function cardDateValidation() {
  cardMonthValue = cardMonth.value;
  cardYearValue = cardYear.value;
  if (cardMonthValue === "" || cardYearValue === "")
    showError(cardDate, "Please input a valid date");
  if (cardMonthValue.length < 2 || cardYearValue.length < 2)
    showError(cardDate, "Please follow the format given");
  if (
    cardMonthValue > 0 &&
    cardMonthValue.length === 2 &&
    cardYearValue > 0 &&
    cardYearValue.length === 2
  ) {
    date.forEach(
      (date) => (date.innerHTML = `${cardMonthValue} / ${cardYearValue}`)
    );
    showsuccess(cardDate);
  }
  cardMonth.value = "";
  cardYear.value = "";
}

//Function to validate cvc
function cvcValidation() {
  cardCvcValue = cardCvc.value;
  if (cardCvcValue === "") showError(cardCvc, "Please input cannot be blank");
  if (cardCvcValue.length < 3) showError(cardCvc, "please check the input");
  if (cardCvcValue > 0 && cardCvcValue.length === 3) {
    cvc.forEach((cvc) => (cvc.innerText = cardCvcValue));
    showsuccess(cardCvc);
  }
  cardCvc.value = "";
}

//Function handle error
function showError(input, err) {
  input.classList.remove("border-lightGray");
  input.classList.remove("border-darkGrayishViolet");
  input.classList.add("border-red-500");
  let msg = input.parentElement.lastElementChild;
  msg.textContent = err;
}

//Function handle success
function showsuccess(input) {
  input.classList.remove("border-lightGray");
  input.classList.add("border-darkGrayishViolet");
}

//Function to handleCardNumberInput
function toChange() {
  cardNumberValue = cardNumber.value;
  let input = cardNumberValue.match(/\d{1,4}/g);
  let output = input.join(" ");
  cardNumber.value = output;
}

//Function to initialize validation
function init() {
  cardNameValidation();
  cardNumberValidation();
  cardDateValidation();
  cvcValidation();
  submitForm(
    cardNameValue,
    cardNumberValue,
    cardMonthValue,
    cardYearValue,
    cardCvcValue
  );
}

//function to show Thankyou card
function submitForm(nameValue, numberValue, monthValue, yearValue, cvcValue) {
  let cvc1 = cvc[0].innerText;
  let cvc2 = cvc[1].innerText;
  let number1 = number[0].innerText;
  let number2 = number[1].innerText;
  let date1 = date[0].innerHTML;
  let date2 = date[1].innerHTML;
  let holder1 = holderName[0].innerText;
  let holder2 = holderName[1].innerText;
  if (
    (number1 && number2) === numberValue &&
    (date1 && date2) === `${monthValue} / ${yearValue}` &&
    (holder1 && holder2) === nameValue &&
    (cvc1 && cvc2) === cvcValue
  ) {
    content.innerHTML = `
    <div
    class="flex flex-col mx-auto justify-center items-center lg:w-1/2 text-center"
  >
    <div>
      <img src="images/icon-complete.svg" class="mb-2" alt="" />
    </div>
    <h3 class="text-2xl my-2 text-veryDarkDiolet">Thank You</h3>
    <p class="text-md mb-4 text-darkGrayishViolet">
      We've added your card details
    </p>
    <button onClick=(location.reload())
      class="w-full bg-veryDarkViolet text-white py-2 rounded-md"
    >
      Continue
    </button>
  </div>
    `;
  } else {
    //for testing purposes
    console.log(10);
  }
}

//EventListerner to submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  init();
});
