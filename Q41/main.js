//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//array with magicians' names
var magicians = ["harry potter", "hermione", "ron weasly"];
//function defining that prints name in array
function show_magicians(magicians) {
    magicians.forEach(function (magic) { return console.log(magic); });
}
//passing the array in function to print names
show_magicians(magicians);
