//Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a array. Make sure the array is not in alphabetical order.

let countries:string[] = ["Saudia", "Dubai", "UK", "Germany", "Canada", "Australia"];

//• Print your array in its original order.
console.log(`Original Array: ${countries}`);

//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order: ", [...countries].sort());

//• Show that your array is still in its original order by printing it again.
console.log(`Checking original order: ${countries}`);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed array: ", [...countries].reverse());

//• Show that your array is still in its original order by printing it again.
console.log(`Checking original order: ${countries}`);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversing the original array: ", countries.reverse());

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reversing back to original: ", countries.reverse());

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Original array to alphabetical order: ", countries.sort());

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reversing alphabetical order: ", countries.reverse());