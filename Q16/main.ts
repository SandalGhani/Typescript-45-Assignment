//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestList:string[] = ["Sandal Ghani", "Kinza Asif", "Umaima Arif", "Ghazala Yasmeen", "Anoosha Ghani"];

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

guestList.forEach(guest => console.log(`Hey ${guest}, here is a good news, we've got a bigger table, so now more guests are coming`));

// Add one new guest to the beginning of your array.

let addingNewGuest = guestList.unshift("Arooba Umair");

// Add one new guest to the middle of your array. • Add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//adding guest to the middle of array
let newGuestMiddle = guestList.splice(Math.floor(guestList.length/2),0,"Arooba Umair");

//sending invitation to each guest
guestList.forEach(guest => console.log(`Hey Ms. ${guest}, you're invited to the dinner`));