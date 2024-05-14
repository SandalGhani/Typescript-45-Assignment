/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
var userNames = ["admin", "root", "Sandal Ghani", "owner", "moderator"];
//checking if array is having values
if (userNames.length === 0) {
    console.log("We need to find some users");
}
else {
    userNames.forEach(function (user) {
        if (user === "admin") {
            console.log("Hello ".concat(user, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    });
}
