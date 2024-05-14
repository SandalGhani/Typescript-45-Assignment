//q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Sandal Ghani";
var lowercase = personName.toLowerCase();
console.log("Person name in lowerCase = ".concat(lowercase));
var uppercase = personName.toUpperCase();
console.log("Person name is uppercase = ".concat(uppercase));
var titlecase = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log("Person name in titlecase = ".concat(titlecase));
