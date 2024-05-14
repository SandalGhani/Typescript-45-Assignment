//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//For making properties of our object "mobilePhone"
interface mobilePhone {
    company: string,
    model: string,
    price: number,
    isWorking: boolean,
}

//making an actual object by defining the required properties
let mobilePhone = {
    company: "Apple",
    model: "15 pro max",
    price: 550000,
    isWorking: true
};

console.log(mobilePhone);