"use strict";

//*************BANKIST APP  */

//Data
const account1 = {
  owner: "Mahatab Hosssain",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //%
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2021-05-19T23:36:17.929Z",
    "2021-05-15T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Samirul Islam",
  movements: [5000, 3400, -150, -790, -3200, -1000, -8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Romio Ali",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Md Tausif",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4];

//**********ELEMENTS */
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//*************************FORMATING DATE*********************************** */

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDay()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0); //It always 0 based so we need to add 1.
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return Intl.DateTimeFormat(locale).format(date);
};

//*******************Format currency******************************* */
const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

//************************Display movements function*******************************/

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  //If sort is true by default(sort?) and slice() create a copy of movements array.
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const formattedMov = formatCurr(mov, acc.locale, acc.currency);

    // new Intl.NumberFormat(acc.locale, {
    //     style: 'currency',
    //     currency: acc.currency,
    // }).format(mov);

    const html = `
<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
</div> `;

    //This method insert HTML element into DOM.
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//Let's call this function inside the login function.for dinamically calculate everythins of this function

// displayMovements(account1.movements);

//********************* VALIDATING USER NAME ************************

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
  // const userName = user.toLowerCase().split(' ').map(word => word[0]).join('');
  // return userName;
};
createUserName(accounts);
console.log(accounts);
// console.log(createUserName(user));

//*************** CALCULATING TOTAL BALANCE ********************** */
const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};
// calcBalance(account1.movements)

//*****************CALCULATING DEPOSIT BALANCE  AND SUMMARY **************** */

const euroToUsd = 1.1;

const totalDepositUsd = function (deposit) {
  const income = deposit.movements
    .filter((mov) => mov > 0)
    // .map((mov, i, arr) => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(income);
  labelSumIn.textContent = formatCurr(income, deposit.locale, deposit.currency);

  const withdrawal = deposit.movements
    .filter((mov) => mov <= 0)
    .reduce((acc, sub) => acc + sub, 0);
  // console.log(withdrawal);
  labelSumOut.textContent = formatCurr(
    Math.abs(withdrawal),
    deposit.locale,
    deposit.currency
  );

  const interests = deposit.movements
    .filter((mov) => mov > 0)
    .map((deposits) => (deposits * deposit.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((total, mov) => total + mov, 0);
  // console.log(interests)
  labelSumInterest.textContent = formatCurr(
    interests,
    deposit.locale,
    deposit.currency
  );
};
// totalDepositUsd(account1.movements)

//****************Update UI function********************** */
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc);

  //Display balance
  calcBalance(acc);

  //Display summary
  totalDepositUsd(acc);
};

//****************************LOGOUT TIMER IMPLEMENTATION ****************************** */

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart("2", "0");
    const sec = String(time % 60).padStart("2", "0");

    //In each call print the remaning time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 second stop timer and logout the user .
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Login to get started";
      containerApp.style.opacity = 0;
    }
    time--;
  };

  //Set time
  let time = 120;
  //Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//***********************LOGIN IMPLEMENTATION *********************** */

let currentAccount, timer;

//FAKE ACCOUNT LOGIN

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
  //Prevent form from submit
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  //opetional chaining(?.)(pin proprty only read when currentAccount exits)
  if (currentAccount?.pin === +inputLoginPin.value) {
    // console.log('Login successful')

    //Display UI and welcome message.
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    document.querySelector(".instruction").style.display = "none";

    //current date, time implementation
    //Experimenting API
    const now = new Date();

    const option = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale)
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);
    // const now = new Date();
    // const day = `${now.getDay()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); //It always 0 based so we need to add 1.
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

    //Clear and lose focus from input fields after login
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    //update UI
    updateUI(currentAccount);
  }
});

//***************************TRRANSFER AMOUNT ********************************** */

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  // const amount = Number(inputTransferAmount.value);
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    //transfering amount
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // console.log(`Transfered to ${amount} to ${receiverAcc.owner}`);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    inputTransferTo.value = inputTransferAmount.value = "";
    //Updating UI
    updateUI(currentAccount);
    //Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  } else {
    console.log(`Insuficient fund`);
  }
});

//**********************REQUEST LOAN********************************** */

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const loanAmount = +inputLoanAmount.value;

  if (
    loanAmount > 0 &&
    currentAccount.movements.some((mov) => mov >= (loanAmount * 10) / 100)
  );

  setTimeout(function () {
    currentAccount.movements.push(loanAmount);
    currentAccount.movementsDates.push(new Date().toISOString());
    //Update UI
    updateUI(currentAccount);
    //Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }, 3000);

  //Clear field
  inputLoanAmount.value = "";
  console.log("Loan approved");
});

//*******************************CLOSE ACCOUNT ************************ */

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount?.userName &&
    +inputClosePin.value === currentAccount.pin
  );

  const index = accounts.findIndex(
    (acc) => acc.userName === currentAccount.userName
  );
  //Delete account
  accounts.splice(index, 1);
  //Hide UI
  containerApp.style.opacity = 0;
  inputCloseUsername.value = inputClosePin.value = "";
  console.log(`Account closed ${index}`);
});

//***************Flatening array into one ***************************** */

console.log(`-------------------Flatening movements-------------------------`);
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//FLATMAP() combines flat() and map() together.It go one level deep(nested of nested) array.
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

//****************** SORT MOVEMENTS*********************************** */

//Here needs a state variable(not constant) and it always initialize outside of a function.
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//*****************COLOR ODD OR EVEN ROW ***************** */

document.querySelector(".logo").addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.background = "lightblue";
  });
  console.log("Color Changed");
});

// console.log(account1.movementsDates)

//*************** Show HTML elements into console ***********************/

// console.log(containerMovements.innerHTML);

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Starling"],
]);
