//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//making variables for the exercise
let color:string = "black"
let uppercased = "BLACK"
let ten = 10
let five = 5
let thirty = 30

//Tests for equality and inequality with strings
console.log(`Testing if color is equal black`)
console.log(color == "black");


//Tests using the lower case function
console.log(`\nTesting if uppercased variable is not equal to the lowercased black`);
console.log(uppercased != "black");

console.log(`\nTesting if uppercased variable is not equal to the lowercasedColor`);
console.log(uppercased == uppercased.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nIs five equals to ten");
console.log(five == ten);

console.log(`\nIs five greater than or equal to ten`);
console.log(five >= ten);

console.log(`\nIs ten greater than or equal to five`);
console.log(ten >= five);

//Tests using "and" and "or" operators
console.log(`\nIs ten greater than thirty and less than five`);
console.log((ten > thirty) && (ten < five));

console.log(`\nIs thirty greater than ten and greater than ten`);
console.log(thirty > ten && thirty > ten);

console.log(`\nIs ten less than thirty && less than five`);
console.log(ten < thirty && ten < five);

console.log(`\nTen is less than thirty OR Ten is greater than five`);
console.log(ten < thirty || ten > five);

console.log(`\nTen is greater than thirty OR ten is greater than five`);
console.log(ten > thirty || ten > five);

//Test whether an item is in a array
let cities:string[] = ["karachi", "lahore", "islamabad"]
console.log(`\nChecking if "Multan" is present in cities array`)
console.log(cities.includes("multan"));

let rollnumbers:number[] = [1,2,3,4,5]
console.log(`\nChecking if number#10 is present in rollnumbers array`)
console.log(rollnumbers.includes(10));

console.log(`\nChecking if number#5 is present in rollnumbers array`)
console.log(rollnumbers.includes(5));

//Test whether an item is not in a array
console.log(`\nChecking if number#10 is not present in rollnumbers array`)
console.log(!(rollnumbers.includes(10)));

console.log(`\nChecking if "karachi" is not present in cities array`)
console.log(!(cities.includes("karachi")));