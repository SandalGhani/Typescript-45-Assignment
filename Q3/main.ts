//q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "Sandal Ghani";

let lowercase = personName.toLowerCase();
console.log(`Person name in lowerCase = ${lowercase}`);

let uppercase = personName.toUpperCase();
console.log(`Person name is uppercase = ${uppercase}`);

let titlecase = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(`Person name in titlecase = ${titlecase}`);