//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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

//making a copy of original array
let copy_array = magicians.slice()

//modifying the copy array to include the make_great() with magician names
let copy_greatModification = makeGreat(copy_array);

//show both original & copy array
console.log(`\nOriginal Array`)
//original
show_magicians(magicians)
//copy
console.log(`\nCopied Array`)
show_magicians(copy_greatModification)