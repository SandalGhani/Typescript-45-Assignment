//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[] = ["Sandal Ghani", "Kinza Asif", "Umaima Arif","Ghazala Yasmeen"];

guestList.forEach(guest => console.log(`Hey Ms.${guest}, you're invited to the dinner.`))