/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.*/
//• Make a list of five or more usernames called current_users.
var current_users = ["Sandal Ghani", "Umaima Arif", "Kinza Asif", "Ghazala Yasmeen", "Anoosha Ghani"];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Muhammad Balaj", "Umair Ahmed", "Muhammad Arham", "Muhammad Ghayas", "Abdul Ghani"];
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//checking if newUsers already exists or not
new_users.forEach(function (new1) {
    var checking = current_users.some(function (current1) { return new1.toLowerCase() === current1.toLowerCase(); });
    //condition to show if newly used username already exist or available to register
    if (checking) {
        console.log("Hey ".concat(new1, " already exist, try another username"));
    }
    else {
        console.log("".concat(new1, " is available to register"));
    }
});
