//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alienColor = "Green"

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//Program will run if-statement as its true
if(alienColor === "Green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else{console.log("Player just earned 10 points");
}

//• Write one version of this program that runs the if block and another that runs the else block.
//Program will run else-statement because if statement is false
if(alienColor ==="Black") {
    console.log("Player just earned 5 points for shooting the alien");
}
else{console.log("Player just earned 10 points");
}