//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var guest, List = ["Sandal Ghani", "Kinza Asif", "Umaima Arif", "Ghazala Yasmeen"];
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Kinza Asif can't come to the dinner
var cant, Attend = guestList.splice(1, 1);
console.log(guestList);
// Now inviting remaining ones
var re, Invitation = guestList.forEach(function (guest) { return console.log("Hey Ms. ".concat(guest, ", you're still invited to the dinner")); });
