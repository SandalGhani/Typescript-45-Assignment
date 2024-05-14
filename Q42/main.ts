//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//magician names' array
let magicians = ["harry potter", "hermione", "ran wiesly"]

//making function to show magicians' names
function show_magicians(magicians:string[]){
    magicians.forEach(magic => console.log(magic))
}

//function for adding 'make great' with each magician name
function makeGreat (magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}

//calling function to modify with makeGreat
let greatmagicians = makeGreat(magicians)

//printing magicians' names with TheGreat added with names in a list
show_magicians(greatmagicians)