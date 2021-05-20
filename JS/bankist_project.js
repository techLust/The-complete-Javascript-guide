'use strict'

//*************BANKIST APP  */

//Data 
const account1 = {
    owner: 'Mahatab Hosssain',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, //%
    pin: 1111,
};

const account2 = {
    owner: 'Samirul Islam',
    movements: [5000, 3400, -150, -790, -3200, -1000, -8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Romio Ali',
    movements: [200, -200, 340, -300, -20, 50, 400, -460,],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Md Tausif',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];


//**********ELEMENTS */
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//************************Display movements function*******************************/

const displayMovements = function (movements, sort = false) {

    containerMovements.innerHTML = '';
    //If sort is true by default(sort?) and slice() create a copy of movements array.
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} INR </div>
</div> `;

        //This method insert HTML element into DOM.
        containerMovements.insertAdjacentHTML('afterbegin', html);

    });
}

//Let's call this function inside the login function.for dinamically calculate everythins of this function

// displayMovements(account1.movements);


//********************* VALIDATING USER NAME ************************ 

const createUserName = function (accs) {
    accs.forEach(function (acc) {
        acc.userName = acc.owner
            .toLowerCase().split(' ')
            .map(word => word[0])
            .join('');
    })
    // const userName = user.toLowerCase().split(' ').map(word => word[0]).join('');
    // return userName;
}
createUserName(accounts)
console.log(accounts)
// console.log(createUserName(user));




//*************** CALCULATING TOTAL BALANCE ********************** */
const calcBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
    labelBalance.textContent = `${acc.balance} INR`
}
// calcBalance(account1.movements)




//*****************CALCULATING DEPOSIT BALANCE  AND SUMMARY **************** */

const euroToUsd = 1.1;

const totalDepositUsd = function (deposit) {

    const income = deposit.movements
        .filter(mov => mov > 0)
        // .map((mov, i, arr) => mov * euroToUsd)
        .reduce((acc, mov) => acc + mov, 0)
    // console.log(income);
    labelSumIn.textContent = `${income}`

    const withdrawal = deposit.movements
        .filter(mov => mov <= 0)
        .reduce((acc, sub) => acc + sub, 0)
    // console.log(withdrawal);
    labelSumOut.textContent = `${Math.abs(withdrawal)}`

    const interests = deposit.movements
        .filter(mov => mov > 0)
        .map(deposits => (deposits * deposit.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((total, mov) => total + mov, 0)
    // console.log(interests)
    labelSumInterest.textContent = `${interests}`

}
// totalDepositUsd(account1.movements)


//****************Update UI function********************** */
const updateUI = function (acc) {
    //Display movements 
    displayMovements(acc.movements);

    //Display balance 
    calcBalance(acc);

    //Display summary
    totalDepositUsd(acc);
}

//***********************Login feature implementation*********************** */
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    //Prevent form from submit
    e.preventDefault()

    currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value)
    console.log(currentAccount)
    //opetional chaining(?.)(pin proprty only read when currentAccount exits)
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // console.log('Login successful')

        //Display UI and welcome message.
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        //Clear and lose focus from input fields after login 
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        //update UI
        updateUI(currentAccount);
    }
})



//***************************TRRANSFER AMOUNT ********************************** */
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);

    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.userName !== currentAccount.userName) {
        console.log(`Transfered to ${amount} to ${receiverAcc.owner}`);
        //transfering amount
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        inputTransferTo.value = inputTransferAmount.value = '';
        //Updating UI
        updateUI(currentAccount)
    } else {
        console.log(`Insuficient fund`)
    }
});


//**********************REQUEST LOAN********************************** */
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const loanAmount = Number(inputLoanAmount.value);

    if (loanAmount > 0 &&
        currentAccount.movements.some(mov => mov >= loanAmount * 10 / 100));
    currentAccount.movements.push(loanAmount)
    //Update UI
    updateUI(currentAccount);
    //Clear field
    inputLoanAmount.value = '';
    console.log('Loan approved');
})


//*******************************CLOSE ACCOUNT ************************ */
btnClose.addEventListener('click', function (e) {
    e.preventDefault();


    if (inputCloseUsername.value === currentAccount?.userName &&
        Number(inputClosePin.value) === currentAccount.pin);



    const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
    //Delete account 
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
    console.log(`Account closed ${index}`)
})




//***************Flatening array into one ***************************** */
console.log(`-------------------Flatening movements-------------------------`)
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance = accounts.
    map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//FLATMAP() combines flat() and map() together.It go one level deep(nested of nested) array.
const overallBalance2 = accounts.
    flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


//****************** SORT MOVEMENTS*********************************** */
//Here needs a state variable(not constant) and it always initialize outside of a function.
let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})



//*************** Show HTML elements into console ***********************/

// console.log(containerMovements.innerHTML);


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Starling'],
]);