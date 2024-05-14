//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guestList:string[] = ["Sandal Ghani", "Muniza Hanif", "Kinza Asif", "Umaima Arif", "Ghazala Yasmeen", "Anoosha Ghani", "Arooba Umair"];
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`We can invite only two people for dinner`);

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestList.length > 2) {
    let removeGuest: string|undefined = guestList.pop();
    console.log(`Sorry, ${removeGuest} you're not invited`);    
}
//sending invitations to the remaining 2 guests
guestList.forEach(guest => console.log(`Hey ${guest}, you're still invited to the dinner`)
);

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while(guestList.length > 0) {
    guestList.pop();
};
console.log(`Program is over ${guestList}`);