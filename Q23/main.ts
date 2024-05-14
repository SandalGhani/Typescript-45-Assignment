//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let five = 5;
let ten = 10;

//Test 1
console.log("Testing if Five is equal to 5?");
console.log(five == 5);

//Test 2
console.log("\n Testing if ten is equal to 5?");
console.log(ten == 10);

//Test 3
console.log(`\n Testing if ten is > five?`);
console.log(ten > five);

//Test 4
console.log(`\n Testing if five is not equal to ten`);
console.log(five != ten);

//Test 5
console.log(`\n Testing if ten is greater or equal to 5`);
console.log(ten >= 5);

//Test 6
console.log(`\n Testing if ten is less than five`);
console.log(ten < five);

//Test 7
console.log(`\n Testing if five is greater than 10`);
console.log(five > 10);

//Test 8
console.log(`\nTesting if five is not greater than 4`);
console.log(!(five > 4));

//Test 9
console.log(`\nTesting if ten is greater than 100`);
console.log(ten > 100);

//Test 10
console.log(`\nTesting if ten is not greater than five`);
console.log(!(ten > five));