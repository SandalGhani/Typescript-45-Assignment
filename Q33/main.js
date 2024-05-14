//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//looping the array 
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var numberzz = numbers_1[_i];
    var ordinalNum = void 0;
    if (numberzz === 1) {
        ordinalNum = 'st';
    }
    else if (numberzz === 2) {
        ordinalNum = 'nd';
    }
    else if (numberzz === 3) {
        ordinalNum = 'rd';
    }
    else {
        ordinalNum = 'th';
    }
    //now attaching th with the number and printing it
    console.log("".concat(numberzz).concat(ordinalNum));
}
