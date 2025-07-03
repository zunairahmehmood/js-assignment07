// chapter #26 to 30
// Math Methods

// ==== question 1 ====
// var number = +prompt("Enter a positive integer:");
// if (number < 0) {
//     alert("Please enter a positive integer.");
// }
// var roundedNumber = Math.round(number);
// var floorNumber = Math.floor(number);
// var ceilNumber = Math.ceil(number);
// document.write("<h1>Number: " + number + "</h1>");
// document.write("<h1>Round off Value: " + roundedNumber + "</h1>");
// document.write("<h1>Floor Value: " + floorNumber + "</h1>");
// document.write("<h1>Ceil Value: " + ceilNumber + "</h1>");


// ==== question 2 ====
// var number = +prompt("Enter a negative floating point number:");
// if (number > 0) {
//     alert("Please enter a negative floating point number.");
// }
// var roundedNumber = Math.round(number);
// var floorNumber = Math.floor(number);
// var ceilNumber = Math.ceil(number);
// document.write("<h1>Number: " + number + "</h1>");
// document.write("<h1>Round off Value: " + roundedNumber + "</h1>");
// document.write("<h1>Floor Value: " + floorNumber + "</h1>");
// document.write("<h1>Ceil Value: " + ceilNumber + "</h1>");


// ==== question 3 ====
// var number = +prompt("Enter a number:");
// if (isNaN(number)) {
//     alert("Please enter a valid number.");
// }
// var absoluteValue = Math.abs(number);
// document.write("<h1>The absolute value of " + number + " is " + absoluteValue + ".</h1>");


// ==== question 4 ====
// var diceRoll = Math.floor(Math.random() * 6) + 1;
// document.write("<h1>Random dice value: " + diceRoll + "</h1>");


// ==== question 5 ====
// var coinFlip = Math.floor(Math.random() * 2) + 1;
// if (coinFlip === 1) {
//     document.write("<h1>Random coin value: Heads</h1>");
// }
// else {
//     document.write("<h1>Random coin value: Tails</h1>");
// }


// ==== question 6 ====
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<h1>Random number between 1 and 100: " + randomNumber + "</h1>");


// ==== question 7 ====
// var weight = prompt("Enter your weight in kilograms:");
// if (weight === "" || isNaN(weight)) {
//     alert("Please enter a valid weight.");
// }
// weight = parseFloat(weight);
// if (weight < 0) {
//     alert("Weight cannot be negative.");
// }
// document.write("<h1>The weight of user is " + weight + " kilograms.</h1>");


// ==== question 8 ====
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = +prompt("Guess the secret number (between 1 and 10):");
// if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
//     alert("Please enter a valid number between 1 and 10.");
// }
// if (userGuess === secretNumber) {
//     document.write("<h1>Congratulations! You guessed the secret number: " + secretNumber + "</h1>");
// }
// else {
//     document.write("<h1>Sorry! The secret number was: " + secretNumber + "</h1>");
// }

// End of chapter #26 to 30









// chapter #31 to 34
// Date Methods

// ==== question 1 ====
// var currentDate = new Date();
// document.write("<h1>Current Date: " + currentDate + "</h1>");


// ==== question 2 ====
// var currentDate = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[currentDate.getMonth()];
// document.write("<h1>Current Month: " + currentMonth + "</h1>");


// ==== question 3 ====
// var currentDate = new Date();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = days[currentDate.getDay()];
// document.write("<h1>Today is " + currentDay + "</h1>");


// ==== question 4 ====
// var currentDate = new Date();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = days[currentDate.getDay()];
// if (currentDay === "Sat" || currentDay === "Sun") {
//     document.write("<h1>It's a Fun Day!</h1>");
// }


// ==== question 5 ====
// var currentDate = new Date();
// var currentDateNumber = currentDate.getDate();
// if (currentDateNumber < 16) {
//     document.write("<h1>First fifteen days of the month</h1>");
// }
// else {
//     document.write("<h1>Last days of the month</h1>");
// }


// ==== question 6 ====
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
// document.write("<h1>Current Date: " + currentDate + "</h1>");
// document.write("<h1>Elapsed milliseconds since January 1, 1970: " + millisecondsSinceEpoch + "</h1>");
// document.write("<h1>Elapsed minutes since January 1, 1970: " + minutesSinceEpoch + "</h1>");


// ==== question 7 ====
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// if (currentHours < 12) {
//     document.write("<h1>It's AM</h1>");
// }
// else {
//     document.write("<h1>It's PM</h1>");
// }


// ==== question 8 ====
// var laterDate = new Date("December 31, 2020");
// document.write("<h1>Later Date: " + laterDate + "</h1>");


// ==== question 9 ====
// var ramadanStartDate = new Date("March 02, 2024");
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();
// var daysSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// document.write("<h1>Number of days since 1st Ramadan, 2015: " + daysSinceRamadan + "</h1>");


// ==== question 10 ====
// var referenceDate = new Date("July 04, 2025");
// var startDate = new Date("January 01, 2025");
// var timeDifference = referenceDate.getTime() - startDate.getTime();
// var secondsSinceStart = Math.floor(timeDifference / 1000);
// document.write("<h1>On reference date " + referenceDate + ", " + secondsSinceStart + " seconds had passed since January 1, 2025.</h1>");


// ==== question 11 ====
// var currentDate = new Date();
// var oneHourAgo = new Date(currentDate.getTime() - (60 * 60 * 1000));
// document.write("<h1>Current Date: " + currentDate + "</h1>");
// document.write("<h1>1 hour ago, it was: " + oneHourAgo + "</h1>");


// ==== question 12 ====
// var currentDate = new Date();
// var hundredYearsAgo = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
// document.write("<h1>Current Date: " + currentDate + "</h1>");
// document.write("<h1>100 years back, it was: " + hundredYearsAgo + "</h1>");


// ==== question 13 ====
// var age = +prompt("Enter your age:");
// if (isNaN(age) || age < 0) {
//     alert("Please enter a valid age.");
// }
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("<h1>Your age is: " + age + "</h1>");
// document.write("<h1>Your birth year is: " + birthYear + "</h1>");


// ==== question 14 ====
// var customerName = prompt("Enter your name:");
// var currentMonth = new Date().toLocaleString('default', { month: 'long' });
// var numberOfUnits = +prompt("Enter number of units consumed:");
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;
// var netAmount = numberOfUnits * chargesPerUnit;
// var grossAmount = netAmount + latePaymentSurcharge;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<h2>Customer Name: " + customerName + "</h2>");
// document.write("<h2>Month: " + currentMonth + "</h2>");
// document.write("<h2>Number of Units: " + numberOfUnits + "</h2>");
// document.write("<h2>Charges per Unit: " + chargesPerUnit + "</h2>");
// document.write("<h2>Net Amount Payable (within Due Date): " + netAmount + "</h2>");
// document.write("<h2>Late Payment Surcharge: " + latePaymentSurcharge + "</h2>");
// document.write("<h2>Gross Amount Payable (after Due Date): " + grossAmount + "</h2>");

// End of chapter #31 to 34