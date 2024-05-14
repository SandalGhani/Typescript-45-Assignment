//Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries = ["Saudia", "Dubai", "UK", "Germany", "Canada", "Australia"];
//• Print your array in its original order.
console.log("Original Array: ".concat(countries));
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order: ", __spreadArray([], countries, true).sort());
//• Show that your array is still in its original order by printing it again.
console.log("Checking original order: ".concat(countries));
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed array: ", __spreadArray([], countries, true).reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Checking original order: ".concat(countries));
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversing the original array: ", countries.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reversing back to original: ", countries.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Original array to alphabetical order: ", countries.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reversing alphabetical order: ", countries.reverse());
